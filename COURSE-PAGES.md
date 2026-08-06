# Course pages

Three pages: `porthmadog.html`, `nefyn.html`, `conwy.html`. All content comes
from `course-data.js` — that is the only file you edit.

## What's loaded

| Course | Tee | Par | Yards | Holes in |
|---|---|---|---|---|
| Porthmadog | Yellow | 71 | 5,965 | All 18 |
| Nefyn (Front + The Point) | Yellow | 71 | 6,309 | All 18 |
| Conwy | Yellow | 72 | 6,476 | All 18 |

Every yardage, par and stroke index is taken from the club scorecards and
checked against the printed OUT / IN / TOTAL rows. All three reconcile exactly.

## Nefyn — card reconciliation

Front + The Point: par 71, 6,309 yellow, 6,520 white. All eighteen loaded.

Two figures on the New nine card were corrected to make the totals
reconcile. Worth checking against the physical card:

- **Hole 11 (New 2), Codyn Galch** — read as par 3, 180 white / 176 yellow.
  As a par 4 of 380/376 the nine totals 3,556 white against a printed
  3,356, and par 37 against a printed 36.
- **Hole 12 (New 3), Cae Lôn Fawr** — yellow read as 328, not 326.

With those two, all six totals match the card exactly and Front + New comes
to par 71 / 6,309 / 6,520 as printed. The Front nine reconciled first time
with no changes.

Stroke indexes split cleanly: the Front takes all the evens, The Point takes
all the odds. Stroke index 1, 3, 5, 7 and 9 are all on The Point.

## The shots calculator

Pick a player from the row above the hole grid and the page shows where they
get shots. Red dots on the grid mark the holes, and the bar above each hole
gives the net par and what score is worth 2 or 3 points.

Allocation is standard: one shot where stroke index ≤ handicap, a second
where stroke index ≤ handicap − 18. Verified — every handicap returns exactly
its own number of shots across 18 holes.

Handicaps come from `PLAYERS` at the top of `course-data.js`. Change them
there if anyone gets cut before we travel.

## Adding overhead images

Each hole currently shows a satellite view centred on the clubhouse, because
per-hole coordinates aren't set. Two ways to improve it:

**Coordinates.** Right-click a tee on Google Maps, copy the numbers, and add
`lat`, `lon` and `zoom` to that hole. Zoom 16 for a long par 5, 17 standard,
18 for a short par 3.

**Images.** Set `img: 'conwy-05.jpg'` on a hole and drop the file in the
folder. This overrides the satellite view. Course planner graphics look far
better than satellite if any of the clubs publish them.

## The `note` field

Empty on all 54 holes, deliberately. Everything currently written is derived
from the card — yardage, par, stroke index and the club's own printed local
rules. Nothing about green slopes, bunker positions or dogleg shapes has been
invented. The `note` field is where that goes once we've actually played it.

## Untested

The Google Maps embeds and the Open-Meteo forecast call couldn't be run from
my sandbox. Both follow documented formats. The directions map has a plain
"Open route in Google Maps" button underneath that will always work, so if an
embed comes up blank you can drop the iframe and keep the button.
