# Misters 26 — The Dragon Tour

Static site for the Misters 26 golf tour, North Wales, 28–31 August 2026.

## Files

| File | Purpose |
|---|---|
| `index.html` | Landing page — crest hero, live countdown to first tee, the field, tee sheet, draws teaser |
| `trip.html` | HQ, day-by-day itinerary, pub guides, Sunday evening options, buggies |
| `rules.html` | Better Ball Stableford format, both draws, Brettini and PRP, handicaps, prize money, Birdie Club, merch |
| `misters25.html` | Portugal 2025 recap — results, awards, player stats, gallery, old crests |
| `styles.css` | Shared stylesheet. All colour and type tokens live at the top in `:root` |

## Images expected in the same folder

Filenames must match exactly (case sensitive on GitHub Pages).

- `Misters_26_Logo.PNG` — tour crest (hero, favicon, nav)
- `Mailin_Men_Logo.JPG`
- `Sultans_Logo.JPG`
- `Championdogs_Logo.JPG`
- `Brettini_Logo.PNG`
- `1786005032013_Misters_Players_25.JPG`
- `1786005032013_Underdogs_champs.JPG`
- `1786005032011_Underdogs.JPG`
- `1786005032012_Malin_Men.JPG`
- `1786005032014_Honky_Tonks.JPG`
- `1786005032010_Malin_Men_Logo.PNG`
- `1786005032011_Honky_Logo.JPG`
- `1786005032012_Underdogs_logo.JPG`

If you rename the 2025 photos to something tidier, update the `src` attributes in `misters25.html`.

## Design tokens

Taken from the tour crest.

```
--ink        #17110C   near-black, headers and footers
--red        #9E1B1E   dragon red, ribbons and accents
--red-deep   #6B1113   ribbon shadow / folds
--gold       #C4A055   aged gold, rules and outlines
--parchment  #F4EDDD   page background
```

Type: **Graduate** (display, collegiate/varsity), **Oswald** (condensed labels and tee times), **Newsreader** (body). All loaded from Google Fonts.

## Adding a page

Copy any page, swap the `<main>` content, and move the `class="active"` in the nav. The nav lives in the `.topbar` block on every page — update all four if you add a fifth page.

## Deploying

Same as previous sites: commit everything in this folder to the repo root and enable GitHub Pages on the main branch.
