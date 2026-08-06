# Adding the forecast section

Two edits per page. Both go into `trip.html` (and `index.html` if you want it there too).

## 1. The section

Paste this into `trip.html`, directly after the closing `</section>` of the
Tournament HQ block and before the itinerary section:

```html
<!-- ================= FORECAST ================= -->
<section>
  <div class="wrap">
    <div class="eyebrow">What the Dragon Sends</div>
    <h2 class="ribbon">TOUR FORECAST</h2>
    <p class="lede" style="margin-bottom:26px;">Live conditions for each round, updated every time this page loads. Wind is the number that matters on this coast.</p>
    <div id="tour-weather">
      <p class="wx-note">Loading the forecast…</p>
    </div>
  </div>
</section>
```

## 2. The script

Immediately before the closing `</body>` tag on the same page:

```html
<script src="weather.js"></script>
```

That is the whole integration. The script does nothing at all on pages that
have no `#tour-weather` element, so it is safe to add the tag everywhere.

---

## How it behaves

| Situation | What shows |
|---|---|
| More than 16 days out | Late-August coastal averages, plus the date live data opens |
| Within 16 days | Real forecast: high/low, wind, gusts, rain chance, conditions |
| API unreachable | The averages again, with a line saying to reload |
| After 30 August 2026 | A single sign-off line instead of stale forecasts |

## Notes

**No API key, no account, no backend.** Open-Meteo allows direct browser
calls and is free for non-commercial use. Nothing to configure, nothing to
leak in a public repo.

**Coordinates** are near enough to each clubhouse for a daily forecast. They
sit at the top of `weather.js` in the `ROUNDS` array if you want to nudge
them.

**The verdict line** is generated from wind speed, gusts and rain chance —
the thresholds are in the `verdict()` function. Change the wording there,
it's meant to be edited.

**Wind before rain.** Links golf in late August is decided by the breeze
far more than by a shower, so the card leads with wind and gusts rather
than burying them under temperature.

## Untested

I could not make a live call to Open-Meteo from my sandbox, so the request
itself has not been run end to end. The URL and response shape follow their
documented format. If nothing renders once deployed, open the browser
console on the page — a failed request will log there, and the most likely
culprit is a parameter name change on their side.
