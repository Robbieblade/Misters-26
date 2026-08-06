/* ============================================================
   MISTERS 26 — Tour Forecast
   Data: Open-Meteo (open-meteo.com) — free, no API key, CORS enabled.
   Renders into any element with id="tour-weather".
   ============================================================ */

(function () {
  'use strict';

  var mount = document.getElementById('tour-weather');
  if (!mount) return;

  // Round day, course, and coordinates. Order matters: the API returns
  // one object per coordinate pair, in the order they are sent.
  var ALL_ROUNDS = [
    { day: 'Friday 28',   course: 'Porthmadog',       tee: '14:00', date: '2026-08-28', lat: 52.9167, lon: -4.1500 },
    { day: 'Saturday 29', course: 'Nefyn & District', tee: '11:10', date: '2026-08-29', lat: 52.9400, lon: -4.5600 },
    { day: 'Sunday 30',   course: 'Conwy',            tee: '11:03', date: '2026-08-30', lat: 53.2900, lon: -3.8400 }
  ];

  // A course page sets data-round="0|1|2" to show only its own round.
  // Anything else shows all three.
  var only = mount.getAttribute('data-round');
  var ROUNDS = (only !== null && ALL_ROUNDS[Number(only)])
    ? [ALL_ROUNDS[Number(only)]]
    : ALL_ROUNDS;

  var FORECAST_HORIZON_DAYS = 16; // Open-Meteo's limit

  // WMO weather codes -> plain description + a symbol
  var CODES = {
    0:  ['Clear',            '☀'],
    1:  ['Mostly clear',     '☀'],
    2:  ['Partly cloudy',    '⛅'],
    3:  ['Overcast',         '☁'],
    45: ['Fog',              '≡'],
    48: ['Freezing fog',     '≡'],
    51: ['Light drizzle',    '☂'],
    53: ['Drizzle',          '☂'],
    55: ['Heavy drizzle',    '☂'],
    61: ['Light rain',       '☂'],
    63: ['Rain',             '☂'],
    65: ['Heavy rain',       '☂'],
    66: ['Freezing rain',    '☂'],
    67: ['Freezing rain',    '☂'],
    71: ['Light snow',       '❄'],
    73: ['Snow',             '❄'],
    75: ['Heavy snow',       '❄'],
    80: ['Showers',          '☂'],
    81: ['Showers',          '☂'],
    82: ['Heavy showers',    '☂'],
    95: ['Thunderstorms',    '⚡'],
    96: ['Thunderstorms',    '⚡'],
    99: ['Thunderstorms',    '⚡']
  };

  function describe(code) {
    return CODES[code] || ['—', '•'];
  }

  // A links-golf verdict. Wind does more damage than rain on this coast,
  // so it leads.
  function verdict(wind, gust, rainChance) {
    if (gust >= 40) return 'Two clubs more into it. Keep the ball down.';
    if (wind >= 25) return 'Serious wind. Punch shots and low spin.';
    if (wind >= 18) return 'A proper breeze. Club up into it.';
    if (rainChance >= 60) return 'Waterproofs on. Grips and gloves dry.';
    if (wind >= 12) return 'Manageable breeze. Normal golf.';
    return 'Benign. No excuses.';
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function daysUntil(dateStr) {
    var target = new Date(dateStr + 'T00:00:00');
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    return Math.round((target - today) / 86400000);
  }

  function render(cards, note) {
    mount.innerHTML = '';
    var grid = el('div', 'wx-grid');
    cards.forEach(function (c) { grid.appendChild(c); });
    mount.appendChild(grid);
    if (note) {
      var n = el('p', 'wx-note');
      n.innerHTML = note;
      mount.appendChild(n);
    }
  }

  function buildCard(round, data) {
    var card = el('article', 'wx-card');

    var head = el('div', 'wx-head');
    head.appendChild(el('span', 'wx-day', round.day + ' August'));
    head.appendChild(el('span', 'wx-tee', round.tee));
    card.appendChild(head);

    card.appendChild(el('h3', 'wx-course', round.course));

    if (!data) {
      card.appendChild(el('div', 'wx-symbol', '?'));
      card.appendChild(el('div', 'wx-cond', 'Forecast not open yet'));
      var avg = el('dl', 'wx-rows');
      [['Typical high', '19°C'], ['Typical low', '13°C'], ['Prevailing wind', 'SW, 12–18 mph'], ['Rain days', 'Roughly 1 in 2']]
        .forEach(function (r) {
          avg.appendChild(el('dt', null, r[0]));
          avg.appendChild(el('dd', null, r[1]));
        });
      card.appendChild(avg);
      card.appendChild(el('p', 'wx-verdict', 'Late August on the North Wales coast. Pack a jumper either way.'));
      return card;
    }

    var d = describe(data.code);
    card.appendChild(el('div', 'wx-symbol', d[1]));
    card.appendChild(el('div', 'wx-cond', d[0]));

    var rows = el('dl', 'wx-rows');
    [
      ['Temp', Math.round(data.tmax) + '° / ' + Math.round(data.tmin) + '°'],
      ['Wind', Math.round(data.wind) + ' mph'],
      ['Gusts', Math.round(data.gust) + ' mph'],
      ['Rain', Math.round(data.rain) + '%']
    ].forEach(function (r) {
      rows.appendChild(el('dt', null, r[0]));
      rows.appendChild(el('dd', null, r[1]));
    });
    card.appendChild(rows);

    card.appendChild(el('p', 'wx-verdict', verdict(data.wind, data.gust, data.rain)));
    return card;
  }

  function showPlaceholder(message) {
    render(ROUNDS.map(function (r) { return buildCard(r, null); }), message);
  }

  function load() {
    var earliest = daysUntil(ROUNDS[0].date);
    var latest = daysUntil(ROUNDS[ROUNDS.length - 1].date);

    if (latest < 0) {
      // Trip is over. Leave the section out rather than show stale data.
      mount.innerHTML = '<p class="wx-note">The Dragon Tour is done. See you on the next leg.</p>';
      return;
    }

    if (earliest > FORECAST_HORIZON_DAYS) {
      var opens = new Date();
      opens.setDate(opens.getDate() + (earliest - FORECAST_HORIZON_DAYS));
      showPlaceholder('Forecasts reach about 16 days ahead. Live data for the first round appears from <strong>' +
        opens.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' }) +
        '</strong>. Until then, these are late-August averages for the coast.');
      return;
    }

    var lats = ROUNDS.map(function (r) { return r.lat; }).join(',');
    var lons = ROUNDS.map(function (r) { return r.lon; }).join(',');

    var url = 'https://api.open-meteo.com/v1/forecast' +
      '?latitude=' + lats +
      '&longitude=' + lons +
      '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max' +
      '&timezone=Europe%2FLondon' +
      '&wind_speed_unit=mph' +
      '&start_date=' + ROUNDS[0].date +
      '&end_date=' + ROUNDS[ROUNDS.length - 1].date;

    fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error('Forecast request failed');
        return res.json();
      })
      .then(function (json) {
        // Multiple coordinates return an array; a single one returns an object.
        var sets = Array.isArray(json) ? json : [json];

        var cards = ROUNDS.map(function (round, i) {
          var set = sets[i];
          if (!set || !set.daily || !set.daily.time) return buildCard(round, null);

          var idx = set.daily.time.indexOf(round.date);
          if (idx === -1) return buildCard(round, null);

          return buildCard(round, {
            code: set.daily.weather_code[idx],
            tmax: set.daily.temperature_2m_max[idx],
            tmin: set.daily.temperature_2m_min[idx],
            rain: set.daily.precipitation_probability_max[idx] || 0,
            wind: set.daily.wind_speed_10m_max[idx],
            gust: set.daily.wind_gusts_10m_max[idx]
          });
        });

        var stamp = new Date().toLocaleString('en-GB', {
          day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
        });
        render(cards, 'Updated ' + stamp + '. Forecast from Open-Meteo, refreshed each time the page loads.');
      })
      .catch(function () {
        showPlaceholder('Forecast unavailable right now. Reload the page to try again.');
      });
  }

  load();
})();
