/* ============================================================
   MISTERS 26 — COURSE PAGE RENDERER
   Reads data-course on <body>, renders from COURSES.
   ============================================================ */

(function () {
  'use strict';

  var key = document.body.getAttribute('data-course');
  if (!key || typeof COURSES === 'undefined' || !COURSES[key]) return;
  var c = COURSES[key];
  var current = 0;
  var player = null; // selected player object, or null for "no shots"

  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  /* ---------- Shots received ----------
     Standard allocation: one shot on every hole with stroke index
     <= handicap, then a second shot on stroke index <= handicap - 18,
     and so on. Works for any handicap. */
  function shotsOn(hcp, si) {
    if (hcp === null || hcp === undefined) return 0;
    var n = 0;
    while (hcp >= si) { n++; hcp -= 18; }
    return n;
  }

  /* ---------- Header facts ---------- */
  var facts = $('course-facts');
  if (facts) {
    [
      ['Par ' + c.par, c.combination || PLAYING_TEE],
      [c.yards.toLocaleString('en-GB'), 'Yards (yellow)'],
      ['R' + c.round, c.day],
      [c.tee, 'First Tee']
    ].forEach(function (f) {
      var d = el('div', 'fact');
      d.appendChild(el('div', 'f-num', f[0]));
      d.appendChild(el('div', 'f-label', f[1]));
      facts.appendChild(d);
    });
  }

  /* ---------- Summary + local knowledge ---------- */
  var sum = $('course-summary');
  if (sum) c.summary.forEach(function (p) { sum.appendChild(el('p', 'lede', p)); });

  var lk = $('course-local');
  if (lk) {
    var ul = el('ul', 'tick');
    c.localKnowledge.forEach(function (t) {
      var li = el('li');
      li.innerHTML = t;
      ul.appendChild(li);
    });
    lk.appendChild(ul);
  }

  /* ---------- Directions ---------- */
  var dir = $('course-directions');
  if (dir) {
    var from = encodeURIComponent(c.fromAddress);
    var to = encodeURIComponent(c.name + ', ' + c.address);

    var note = el('p', 'lede');
    note.innerHTML = '<strong>' + c.from + ' &rarr; ' + c.name + '.</strong> ' + c.driveNote;
    dir.appendChild(note);

    var frame = el('div', 'map-frame');
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.google.com/maps?saddr=' + from + '&daddr=' + to + '&output=embed';
    iframe.loading = 'lazy';
    iframe.title = 'Driving route from ' + c.from + ' to ' + c.name;
    iframe.setAttribute('allowfullscreen', '');
    frame.appendChild(iframe);
    dir.appendChild(frame);

    var row = el('div', 'btn-row');
    row.style.justifyContent = 'flex-start';
    [['Open route in Google Maps', 'https://www.google.com/maps/dir/?api=1&origin=' + from + '&destination=' + to, 'btn btn-red'],
     ['Clubhouse location', 'https://www.google.com/maps/search/?api=1&query=' + to, 'btn']
    ].forEach(function (b) {
      var a = el('a', b[2], b[0]);
      a.href = b[1]; a.target = '_blank'; a.rel = 'noopener';
      row.appendChild(a);
    });
    dir.appendChild(row);
  }

  /* ---------- Missing front nine notice ---------- */
  var miss = $('course-missing');
  if (miss && c.missingFront) {
    var box = el('div', 'callout');
    box.innerHTML = '<div class="co-title">FRONT NINE NOT LOADED</div><p>' + c.missingFrontNote + '</p>';
    miss.appendChild(box);
  }

  /* ---------- Handicap picker ---------- */
  var picker = $('hcp-picker');
  if (picker) {
    var lbl = el('span', 'hcp-lbl', 'Shots for');
    picker.appendChild(lbl);

    var none = el('button', 'hcp-btn is-active', 'Scratch');
    none.type = 'button';
    none.addEventListener('click', function () { setPlayer(null, none); });
    picker.appendChild(none);

    PLAYERS.forEach(function (p) {
      var b = el('button', 'hcp-btn');
      b.type = 'button';
      b.innerHTML = p.name + ' <span class="hcp-num">' + p.hcp + '</span>';
      b.addEventListener('click', function () { setPlayer(p, b); });
      picker.appendChild(b);
    });
  }

  function setPlayer(p, btn) {
    player = p;
    if (picker) {
      Array.prototype.forEach.call(picker.querySelectorAll('.hcp-btn'), function (b) {
        b.classList.toggle('is-active', b === btn);
      });
    }
    paintSelector();
    show(current);
  }

  /* ---------- Hole selector ---------- */
  var selector = $('hole-selector');
  var panel = $('hole-panel');
  if (!selector || !panel) return;

  if (!c.holes || !c.holes.length) {
    selector.innerHTML = '';
    panel.innerHTML = '<div class="callout"><p>Hole guide not loaded for this course yet.</p></div>';
    return;
  }

  if (c.holesLabel) {
    var lab = el('div', 'holes-label');
    lab.appendChild(el('div', 'hl-title', c.holesLabel));
    var hi = el('p', 'hl-intro');
    hi.innerHTML = c.holesIntro || '';
    lab.appendChild(hi);
    selector.parentNode.insertBefore(lab, selector);
  }

  c.holes.forEach(function (h, i) {
    var btn = el('button', 'hole-btn');
    btn.type = 'button';
    btn.innerHTML = '<span class="hb-no">' + h.no + '</span>' +
                    '<span class="hb-par">Par ' + h.par + '</span>' +
                    '<span class="hb-dots"></span>';
    btn.addEventListener('click', function () { show(i); });
    selector.appendChild(btn);
  });

  function paintSelector() {
    Array.prototype.forEach.call(selector.children, function (b, i) {
      var h = c.holes[i];
      var n = player ? shotsOn(player.hcp, h.si) : 0;
      var dots = b.querySelector('.hb-dots');
      dots.textContent = n ? new Array(n + 1).join('•') : '';
      b.classList.toggle('has-shot', n > 0);
    });
  }

  function show(i) {
    current = i;
    var h = c.holes[i];

    Array.prototype.forEach.call(selector.children, function (b, n) {
      b.classList.toggle('is-active', n === i);
    });

    panel.innerHTML = '';

    /* Head */
    var head = el('div', 'hole-head');
    var left = el('div');
    var title = 'HOLE ' + h.no;
    if (h.oldNo) title += ' · OLD ' + h.oldNo;
    left.appendChild(el('div', 'hole-no', title));
    if (h.name) left.appendChild(el('div', 'hole-name', h.name));
    head.appendChild(left);

    var stats = el('div', 'hole-stats');
    [['Par', h.par], ['Yards', h.yards], ['SI', h.si]].forEach(function (s) {
      var box = el('div', 'hstat');
      box.appendChild(el('div', 'hstat-num', s[1]));
      box.appendChild(el('div', 'hstat-label', s[0]));
      stats.appendChild(box);
    });
    head.appendChild(stats);
    panel.appendChild(head);

    /* Shots bar */
    var n = player ? shotsOn(player.hcp, h.si) : 0;
    var bar = el('div', 'shots-bar' + (n ? ' has-shot' : ''));
    if (player) {
      var net = h.par + n;
      bar.innerHTML = '<strong>' + player.name + '</strong> receives <strong>' +
        (n === 0 ? 'no shot' : n + (n === 1 ? ' shot' : ' shots')) +
        '</strong> here. Net par ' + net + ', so a <strong>' + net +
        '</strong> is 2 points and a <strong>' + (net - 1) + '</strong> is 3.';
    } else {
      bar.innerHTML = 'Pick a player above to see shots received and the Stableford target.';
    }
    panel.appendChild(bar);

    /* Body */
    var body = el('div', 'hole-body');

    var viewWrap = el('div', 'hole-view');
    if (h.img) {
      var img = document.createElement('img');
      img.src = h.img;
      img.alt = 'Overhead view of hole ' + h.no + ' at ' + c.name;
      img.loading = 'lazy';
      viewWrap.appendChild(img);
    } else {
      var lat = h.lat || c.lat, lon = h.lon || c.lon, z = h.zoom || 16;
      var f = el('div', 'map-frame');
      var ifr = document.createElement('iframe');
      ifr.src = 'https://www.google.com/maps?q=' + lat + ',' + lon + '&t=k&z=' + z + '&output=embed';
      ifr.loading = 'lazy';
      ifr.title = 'Satellite view, hole ' + h.no;
      f.appendChild(ifr);
      viewWrap.appendChild(f);
      var cap = el('p', 'view-cap', 'Satellite view of the course. Per-hole coordinates not set yet.');
      viewWrap.appendChild(cap);
    }
    body.appendChild(viewWrap);

    var strat = el('div', 'hole-strategy');
    [['Off the tee', h.tee], ['Approach', h.approach], ['How to play it', h.strategy]].forEach(function (s) {
      if (!s[1]) return;
      strat.appendChild(el('h4', null, s[0]));
      strat.appendChild(el('p', null, s[1]));
    });

    var yl = el('p', 'yard-line');
    yl.innerHTML = '<strong>' + h.yards + '</strong> yellow &nbsp;·&nbsp; ' + h.yardsWhite + ' white';
    strat.appendChild(yl);

    if (h.note) {
      var nb = el('div', 'hole-avoid');
      nb.appendChild(el('span', 'avoid-label', 'Local'));
      nb.appendChild(el('span', null, h.note));
      strat.appendChild(nb);
    }
    body.appendChild(strat);
    panel.appendChild(body);

    /* Prev / next */
    var nav = el('div', 'hole-nav');
    var pi = (i - 1 + c.holes.length) % c.holes.length;
    var ni = (i + 1) % c.holes.length;
    var prev = el('button', 'btn', '← Hole ' + c.holes[pi].no);
    prev.type = 'button';
    prev.addEventListener('click', function () { show(pi); });
    var next = el('button', 'btn btn-red', 'Hole ' + c.holes[ni].no + ' →');
    next.type = 'button';
    next.addEventListener('click', function () { show(ni); });
    nav.appendChild(prev);
    nav.appendChild(next);
    panel.appendChild(nav);
  }

  paintSelector();
  show(0);

  document.addEventListener('keydown', function (e) {
    if (/^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight') show((current + 1) % c.holes.length);
    if (e.key === 'ArrowLeft') show((current - 1 + c.holes.length) % c.holes.length);
  });

})();
