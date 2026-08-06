# Course pages

Three pages: `porthmadog.html`, `nefyn.html`, `conwy.html`. All content comes
from `course-data.js` — that is the only file you edit.

## What's loaded

| Course | Tee | Par | Yards | Holes in |
|---|---|---|---|---|
| Porthmadog | Yellow | 71 | 5,965 | All 18 |
| Nefyn (Front + The Point) | Yellow | 71 | 6,309 | None — cards needed |
| Conwy | Yellow | 72 | 6,476 | All 18 |

Every yardage, par and stroke index is taken from the club scorecards and
checked against the printed OUT / IN / TOTAL rows. All three reconcile exactly.

## Still needed: both Nefyn nines

The Point is confirmed, so the round is **Front + The Point: par 71, 6,309
yards yellow, 6,520 white**. That is 900 yards longer than Front + Old and
makes Nefyn the second longest card of the tour, not the shortest.

The card supplied is the **Old nine**, which is no longer part of the round.
I need the Front nine and The Point.

Derived from the three combination totals printed on the Old card:

| Nine | Par | Yellow | White |
|---|---|---|---|
| Front | 35 | 3,048 | 3,164 |
| The Point (New) | 36 | 3,261 | 3,356 |

These cross-check exactly against the printed New + Old total (5,624 yellow /
5,864 white), so the figures are sound. What's missing is hole-by-hole: par,
yardage and stroke index for each of the eighteen.

The Old nine data is still loaded on the page, clearly labelled as not part
of the round, since it may still get played as an extra.

### Confirm it in writing

The club's note on the Golfbreaks booking states no tee times on The Point
after 10:30 on Saturdays and Sundays, and none during school holidays or bank
holidays. The tee is 11:10 on a Saturday in late August. If clearance came by
phone, get it in an email so the starter has it too.

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
