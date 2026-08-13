/* ============================================================
   MISTERS 26 — COURSE DATA
   ------------------------------------------------------------
   All yardages, pars and stroke indexes below are taken from the
   official club scorecards. Totals have been checked against the
   printed OUT / IN / TOTAL rows and all three reconcile exactly.

   PLAYING TEE: yellow. White yardages are stored alongside as
   `yardsWhite` and shown in brackets on each hole.

   Stroke index drives the shots-received calculator, so it must
   stay accurate. Do not edit the si values.

   The `note` field is deliberately empty on every hole. That is
   where real local knowledge goes once we have walked it, or
   once someone digs out a course planner. Everything else here
   is derived from the card, not invented.
   ============================================================ */

var PLAYING_TEE = 'Yellow tees';

var PLAYERS = [
  { name: 'Rob',     team: 'Mailin Men',   hcp: 15 },
  { name: 'Sitch',   team: 'Sultans',      hcp: 18 },
  { name: 'Brett',   team: 'Brettini',     hcp: 18 },
  { name: 'Sam',     team: 'Mailin Men',   hcp: 21 },
  { name: 'Bennett', team: 'Championdogs', hcp: 21 },
  { name: 'Ferm',    team: 'Sultans',      hcp: 24 },
  { name: 'Teevo',   team: 'Championdogs', hcp: 24 }
];

var COURSES = {

  /* ==========================================================
     PORTHMADOG — ROUND 1 — Par 71, 5,965 yellow / 6,278 white
     ========================================================== */
  porthmadog: {
    key: 'porthmadog',
    name: 'Porthmadog Golf Club',
    round: 1,
    roundIndex: 0,
    day: 'Friday 28 August',
    tee: '14:00',
    address: 'Morfa Bychan, Porthmadog, LL49 9UU',
    lat: 52.9167,
    lon: -4.1500,

    par: 71,
    yards: 5965,
    yardsWhite: 6278,
    sss: 69.4,
    slope: 121,

    summary: [
      'The shortest card of the tour at under 6,000 yards off the yellows, but the most demanding walk: the most elevation and hills of the three courses. Par 71, with an out half of 3,058 and a slightly shorter back nine at 2,907.',
      'The card tells you where the round is decided. Four of the five hardest holes by stroke index sit on the back nine, and the 14th and 15th come at you back to back off SI 1 and SI 3. The front is where you bank shots, particularly the run from the 7th to the 9th where three of the four easiest holes on the course sit together.'
    ],

    localKnowledge: [
      'Two par 5s back to back at the 7th and 8th, both under 500 yards off the yellows, stroke index 14 and 10. That is the birdie window and everyone in the group gets a shot on both.',
      'The 12th is 275 yards off the yellow and 351 off the white, the biggest tee-to-tee gap on the card by some way. Confirm which markers we are on before anyone pulls driver.',
      'Buggies are £30 and bookable on the day. This is the hilliest of the three courses by some way, so it is the one round where the money is worth spending — and it happens to be the cheapest of the three.',
      'First round of the tour after a four-hour drive. Ten minutes on the putting green beats ten minutes on the range.',
      'Late tee time means finishing around 18:30 with the light going. Keep the pace up.'
    ],

    from: 'Sheffield',
    fromAddress: 'Sheffield, UK',
    driveNote: 'Roughly four hours. Suggested departures: Sheffield 09:00, Ruddington 09:30, arriving 13:00 for a 14:00 tee.',

    holes: [
      { no: 1, par: 4, yards: 352, yardsWhite: 358, si: 6,
        tee: 'Straightforward length for an opening hole. Whatever you can put in play, not whatever goes furthest.',
        approach: 'Around 130 to 150 in for most of the group. A nine iron or wedge.',
        strategy: 'Stroke index 6, so everyone is getting a shot. Net par is a comfortable start and there is no reason to be aggressive on the first swing of the tour.',
        img: 'Porthmadog Hole 01.JPG', note: null },

      { no: 2, par: 3, yards: 122, yardsWhite: 122, si: 16,
        tee: 'Short iron or wedge. Same yardage off both tees.',
        approach: null,
        strategy: 'One of the easier holes on the card at SI 16, but short par 3s punish a lazy swing more than long ones do. Middle of the green is a good result.',
        img: 'Porthmadog Hole 02.JPG', note: null },

      { no: 3, par: 5, yards: 515, yardsWhite: 527, si: 8,
        tee: 'The longest hole on the course. Driver, and it still will not be reachable for anyone in this group.',
        approach: 'A genuine three-shotter. Lay up to a full wedge number rather than scrambling from 40 yards.',
        strategy: 'SI 8 with a shot for everyone. Treat it as net par 6 and a five is a very good hole.',
        img: 'Porthmadog Hole 03.JPG', note: null },

      { no: 4, par: 4, yards: 436, yardsWhite: 454, si: 2,
        tee: 'The second hardest hole on the card and the longest par 4 by 50 yards. Driver, no question.',
        approach: 'Long. A fairway wood or hybrid for most of the group even after a good drive.',
        strategy: 'Stroke index 2, so the higher handicaps get two shots. Play it as a par 5, take the front of the green, and do not chase it.',
        img: 'Porthmadog Hole 04.JPG', note: null },

      { no: 5, par: 4, yards: 377, yardsWhite: 388, si: 4,
        tee: 'Driver. SI 4 says this one has teeth despite the modest yardage.',
        approach: 'Mid iron. Around 150 after a decent tee shot.',
        strategy: 'The third hole of a demanding opening stretch. Net par here is a shot gained on the field.',
        img: 'Porthmadog Hole 05.JPG', note: null },

      { no: 6, par: 3, yards: 141, yardsWhite: 148, si: 12,
        tee: 'Short to mid iron.',
        approach: null,
        strategy: 'Nothing on the card suggests difficulty. Take the green and move on.',
        img: 'Porthmadog Hole 06.JPG', note: null },

      { no: 7, par: 5, yards: 495, yardsWhite: 513, si: 14,
        tee: 'Driver. The first of two par 5s in a row.',
        approach: 'Under 500 yards, so a good drive leaves a fairway wood with a genuine look at getting close.',
        strategy: 'Stroke index 14 on a par 5 is the softest combination on the card. Everyone has a shot, which makes it net par 6. This is a hole to attack.',
        img: 'Porthmadog Hole 07.JPG', note: null },

      { no: 8, par: 5, yards: 462, yardsWhite: 476, si: 10,
        tee: 'The shortest par 5 on the course at 462 off the yellows. Driver and you are thinking about the green.',
        approach: 'Genuinely reachable in two for the longer hitters. For everyone else a lay-up to a full wedge is the higher-percentage play.',
        strategy: 'Back to back par 5s at SI 14 and 10. If the round is going to turn positive it happens across the 7th and 8th.',
        img: 'Porthmadog Hole 08.JPG', note: null },

      { no: 9, par: 3, yards: 158, yardsWhite: 160, si: 18,
        tee: 'Mid iron. A seven iron number off the yellows.',
        approach: null,
        strategy: 'The easiest hole on the course by stroke index, so only the 21s and 24s get a shot. Par matters more here than anywhere.',
        img: 'Porthmadog Hole 09.JPG', note: null },

      { no: 10, par: 4, yards: 369, yardsWhite: 376, si: 11,
        tee: 'Driver. Standard length par 4 to open the back nine.',
        approach: 'Around 140 to 160 in.',
        strategy: 'A breather before the difficult stretch arrives. Take your par and get to the 11th tee in credit.',
        img: 'Porthmadog Hole 10.JPG', note: null },

      { no: 11, par: 3, yards: 199, yardsWhite: 218, si: 5,
        tee: 'The long one. 199 off the yellow and 218 off the white, so a hybrid or fairway wood for most of the group.',
        approach: null,
        strategy: 'Stroke index 5 on a par 3, which tells you the club knows it is brutal. Front edge is a fine result and everyone gets a shot, so net par is a four.',
        img: 'Porthmadog Hole 11.JPG', note: null },

      { no: 12, par: 4, yards: 275, yardsWhite: 351, si: 15,
        tee: 'The big decision hole. 275 off the yellows puts the green in range for the longer hitters. Off the whites it is 351 and a normal par 4.',
        approach: 'If you lay back, leave yourself a full wedge rather than a half shot.',
        strategy: 'SI 15 and short. The card is offering a birdie. Decide on the tee whether you are the man to take it, and if your partner has already found trouble, take the safe route.',
        img: 'Porthmadog Hole 12.JPG', note: null },

      { no: 13, par: 3, yards: 187, yardsWhite: 201, si: 13,
        tee: 'Long iron or hybrid.',
        approach: null,
        strategy: 'The second of three par 3s on the back nine, two of which play long. Bogey is not a disaster with a shot in hand.',
        img: 'Porthmadog Hole 13.JPG', note: null },

      { no: 14, par: 4, yards: 378, yardsWhite: 387, si: 1,
        tee: 'Stroke index 1. Driver, and a good one.',
        approach: 'Mid iron from around 150 to 160.',
        strategy: 'The hardest hole on the course and not the longest, which usually means the trouble is positional rather than about length. Take the middle of the green. The 24s get two shots, so a six is still a point.',
        img: 'Porthmadog Hole 14.JPG', note: null },

      { no: 15, par: 4, yards: 342, yardsWhite: 379, si: 3,
        tee: 'Short par 4 at 342 but stroke index 3. That combination almost always means position off the tee matters more than distance.',
        approach: 'A wedge or short iron. No excuses from that range.',
        strategy: 'Back to back off SI 1 and SI 3. Get through the 14th and 15th at net level and the round is intact.',
        img: 'Porthmadog Hole 15.JPG', note: null },

      { no: 16, par: 4, yards: 312, yardsWhite: 329, si: 17,
        tee: 'Short, and rated the second easiest hole on the card. A three wood or long iron is plenty to leave a full wedge.',
        approach: 'Wedge in. This is a birdie look.',
        strategy: 'SI 17, so only the 21s and 24s get a shot. Coming straight after the two hardest holes, this is where you claw it back.',
        img: 'Porthmadog Hole 16.JPG', note: null },

      { no: 17, par: 5, yards: 464, yardsWhite: 488, si: 7,
        tee: 'The last par 5 and the second shortest on the card at 464. Driver.',
        approach: 'Reachable in two with a good drive. Worth the look at this stage of the round.',
        strategy: 'Everyone gets a shot at SI 7. A five is net four and a serious contribution to the better ball with one hole left.',
        img: 'Porthmadog Hole 17.JPG', note: null },

      { no: 18, par: 4, yards: 381, yardsWhite: 403, si: 9,
        tee: 'Driver. A proper closing par 4 and the longest of the last four holes.',
        approach: 'Mid iron in front of whoever is on the clubhouse terrace.',
        strategy: 'SI 9 and a shot for all seven. Net par to finish round one of the tour.',
        img: 'Porthmadog Hole 18.JPG', note: null }
    ]
  },

  /* ==========================================================
     NEFYN & DISTRICT — ROUND 2 — Front + Old
     Par 68, 5,411 yellow / 5,672 white
     ========================================================== */
  nefyn: {
    key: 'nefyn',
    name: 'Nefyn & District Golf Club',
    round: 2,
    roundIndex: 1,
    day: 'Saturday 29 August',
    tee: '11:10',
    address: 'Morfa Nefyn, Pwllheli, Gwynedd, LL53 6DA',
    lat: 52.9400,
    lon: -4.5600,

    combination: 'Front + New (The Point)',
    par: 71,
    yards: 6309,
    yardsWhite: 6520,
    sss: 71,

    summary: [
      'Clifftop golf on the Ll\u0177n Peninsula and the reason this trip exists. The club has 26 holes, and we are playing Front and New: out along the coast, then onto The Point, a finger of land running into the Irish Sea with water on both sides.',
      'Par 71, 6,309 yards off the yellows. That makes it the second longest card of the tour, only 167 short of Conwy. The Front is par 35 and 3,048 yards; The Point is par 36 and 3,261.',
      'The card is unusual and worth understanding before Saturday. There are only three par 3s in eighteen holes and only two par 5s. Thirteen of the eighteen are par 4s, and on The Point seven of the nine are par 4s between 328 and 397 yards. There is almost no respite built into this golf course.'
    ],

    localKnowledge: [
      'Get The Point confirmed in writing. The club\'s note on the Golfbreaks booking states no tee times on The Point after 10:30 on Saturdays and Sundays, and none during school holidays or bank holidays. Our tee is 11:10 on a Saturday in late August. If it has been cleared verbally, get an email so the starter has it too.',
      '<strong>The Point holds the scoring.</strong> Stroke index 1, 3, 5, 7 and 9 are all on the back nine, and the Front takes every even index. Whatever happens in the first nine holes, the round is decided after the turn.',
      'From the club\'s printed local rules: on the <strong>11th</strong> the boundary is the white posts along the practice ground side of the hedge, and on the <strong>12th</strong> it is the wire fence in the adjacent field. Both out of bounds.',
      'Ditches on the <strong>3rd and 7th</strong> are marked with yellow posts at their ends, and those posts are movable obstructions. So are the black and white fairway guide posts.',
      'Front nine practicalities from the card: safety mesh fence at the 1st tee, and a toilet to the right of the 5th green. Both immovable obstructions, so relief is available.',
      'All distances on the card are measured to the <strong>centre of the green</strong>, not the front. On an exposed links with run-out, that is worth a club.',
      'The T\u0177 Coch Inn sits on the beach at Porthdinllaen below the course. Post-round, not mid-round.',
      'Flat course and a nice coastal walk, so the £35 buggy is a luxury rather than a need. Save it for Porthmadog.'
    ],

    from: 'Tournament HQ',
    fromAddress: 'Aelfor, Ffordd Isaf, Harlech, LL46 2PR',
    driveNote: 'Around an hour from Harlech, round the top of Cardigan Bay. The A487 is slow in late August holiday traffic and an 11:10 tee gives less slack than it looks. Check it on the morning.',

    holes: [
      { no: 1, par: 4, yards: 446, yardsWhite: 459, si: 10, name: 'Pant y Fuches',
        tee: 'The longest par 4 on the front nine, and the opening hole. Driver, and accept that you may not reach in two.',
        approach: 'Long. A fairway wood or hybrid for most after a decent drive.',
        strategy: 'A brutal opener at 446 yards. Everyone gets a shot at SI 10, so net bogey is the sensible target on the first swing of the day. Take five and get going.',
        img: 'Nefyn Hole 01.JPG', note: null },

      { no: 2, par: 4, yards: 349, yardsWhite: 366, si: 4, name: 'Borthwen',
        tee: 'Driver or three wood. Stroke index 4 despite only 349 yards, so the trouble is positional.',
        approach: 'Short to mid iron from around 120 to 140.',
        strategy: 'The second hardest hole on the front nine and not remotely the longest. Find the fairway. Net par here is worth more than it feels.',
        img: 'Nefyn Hole 02.JPG', note: null },

      { no: 3, par: 4, yards: 367, yardsWhite: 385, si: 8, name: 'Pwll Gwlyb',
        tee: 'Driver. The name translates roughly as wet pool, and the local rules confirm a ditch on this hole marked with yellow posts.',
        approach: 'Mid iron from around 140 to 160.',
        strategy: 'A hole that tells you what it is in its own name. Know where the ditch sits before you take an aggressive line.',
        img: 'Nefyn Hole 03.JPG', note: null },

      { no: 4, par: 5, yards: 464, yardsWhite: 472, si: 12, name: 'Hirdir',
        tee: 'The only par 5 on the front nine and one of just two on the card. Driver.',
        approach: 'At 464 it is genuinely reachable in two with a good drive.',
        strategy: 'Long land, says the name. A par 5 at SI 12 with a shot for everyone is the best scoring chance of the outward half. Take it, because they are scarce here.',
        img: 'Nefyn Hole 04.JPG', note: null },

      { no: 5, par: 3, yards: 125, yardsWhite: 152, si: 18, name: 'Parciau',
        tee: 'Wedge or short iron off the yellows at 125, but 152 off the whites. Confirm the markers.',
        approach: null,
        strategy: 'The easiest hole on the course and the shortest by 28 yards. Only the 21s and 24s get a shot. On an exposed clifftop a short par 3 is entirely about the wind, so trust the flag over the yardage.',
        img: 'Nefyn Hole 05.JPG', note: null },

      { no: 6, par: 4, yards: 431, yardsWhite: 441, si: 2, name: 'Gwynt Teg',
        tee: 'Stroke index 2 and 431 yards. Driver, and a good one.',
        approach: 'Long iron or hybrid for most of this group.',
        strategy: 'Fair wind, says the name, which is optimistic. The hardest hole on the front nine and the second hardest on the card. The 21s and 24s get two shots. Play it as a par 5.',
        img: 'Nefyn Hole 06.JPG', note: null },

      { no: 7, par: 4, yards: 397, yardsWhite: 404, si: 6, name: 'Yr Eifl',
        tee: 'Driver. Named after the three peaks on the Ll\u0177n, which are what you will be looking at.',
        approach: 'Mid to long iron.',
        strategy: 'The second of the two ditches flagged in the local rules. Everyone gets a shot at SI 6, but at 397 into any breeze this plays a lot longer than the number.',
        img: 'Nefyn Hole 07.JPG', note: null },

      { no: 8, par: 4, yards: 316, yardsWhite: 325, si: 16, name: 'Dyffryn',
        tee: 'The shortest par 4 on the course at 316. Three wood or long iron is plenty to leave a full wedge.',
        approach: 'Wedge from around 100. This is a birdie look.',
        strategy: 'SI 16, so only the 21s and 24s get a shot. Coming after the 6th and 7th, this is where you get something back.',
        img: 'Nefyn Hole 08.JPG', note: null },

      { no: 9, par: 3, yards: 153, yardsWhite: 160, si: 14, name: 'L\u00f4n Penrhyn Bach',
        tee: 'Mid iron. A seven iron number off the yellows.',
        approach: null,
        strategy: 'The little headland lane. A straightforward par 3 to finish the outward half, and one of only three on the card. Take the green and go to the turn.',
        img: 'Nefyn Hole 09.JPG', note: null },

      { no: 10, par: 4, yards: 397, yardsWhite: 407, si: 5, name: 'Cae Gwynt',
        tee: 'Out onto The Point, and it starts hard. Driver.',
        approach: 'Mid to long iron.',
        strategy: 'Windy field, and the name is not decorative. The Point holds stroke index 1, 3, 5, 7 and 9, and this is the first of them. Everyone gets a shot. Settle in.',
        img: 'Nefyn Hole 10.JPG', note: null },

      { no: 11, par: 3, yards: 176, yardsWhite: 180, si: 13, name: 'Codyn Galch',
        tee: 'Long iron or hybrid. The only par 3 on The Point.',
        approach: null,
        strategy: 'The local rules put the boundary on this hole at the white posts along the practice ground side of the hedge, and that is out of bounds. The one short hole in a nine of par 4s, so make it count.',
        img: 'Nefyn Hole 11.JPG', note: null },

      { no: 12, par: 4, yards: 328, yardsWhite: 352, si: 9, name: 'Cae L\u00f4n Fawr',
        tee: '328 off the yellows and 352 off the whites, the biggest gap on The Point. Three wood may be plenty.',
        approach: 'Wedge or short iron.',
        strategy: 'Short by the standards of this nine. The local rules put the boundary in the adjacent field behind a wire fence, so know which side is safe before you commit.',
        img: 'Nefyn Hole 12.JPG', note: null },

      { no: 13, par: 4, yards: 332, yardsWhite: 344, si: 17, name: 'Cae\'r Urdo',
        tee: 'Second shortest hole on The Point. Position over power.',
        approach: 'Wedge in.',
        strategy: 'SI 17 and the softest hole on this nine by some way. Only the 21s and 24s get a shot, which means par is close to compulsory. Bank it before the 14th.',
        img: 'Nefyn Hole 13.JPG', note: null },

      { no: 14, par: 4, yards: 393, yardsWhite: 401, si: 3, name: 'Chwistir',
        tee: 'Stroke index 3. Driver.',
        approach: 'Long iron or hybrid.',
        strategy: 'The start of the three hardest holes on the course, back to back to back: SI 3, then SI 1, then SI 7. If this tournament turns, it turns here. The 21s and 24s get two shots.',
        img: 'Nefyn Hole 14.JPG', note: null },

      { no: 15, par: 4, yards: 396, yardsWhite: 407, si: 1, name: 'Abergerch',
        tee: 'Stroke index 1 on the whole golf course. Driver, and take the safe side.',
        approach: 'Long approach into an exposed green.',
        strategy: 'The hardest hole at Nefyn, arriving with four to play and the match likely live. Everyone gets a shot and the higher handicaps get two. Net bogey is a win. Do not try to be a hero on a clifftop.',
        img: 'Nefyn Hole 15.JPG', note: null },

      { no: 16, par: 4, yards: 363, yardsWhite: 372, si: 7, name: 'Gwyliwyr',
        tee: 'Driver or three wood. The third of the hard run.',
        approach: 'Short to mid iron from around 130 to 150.',
        strategy: 'The watchmen. Shorter than the two before it, so this is the one of the three to attack. Everyone has a shot at SI 7.',
        img: 'Nefyn Hole 16.JPG', note: null },

      { no: 17, par: 5, yards: 502, yardsWhite: 514, si: 11, name: 'Cwm Eithin',
        tee: 'The only par 5 on The Point and the last one of the round. Driver.',
        approach: 'Reachable in two at 502 with a good drive, but the name means gorse valley. Gorse is a reload, not a recovery.',
        strategy: 'Everyone gets a shot, which makes this net par 6 with one hole to play. The biggest swing hole on the back nine, and the last real chance to make ground.',
        img: 'Nefyn Hole 17.JPG', note: null },

      { no: 18, par: 4, yards: 374, yardsWhite: 379, si: 15, name: 'Golygfa',
        tee: 'Driver or three wood to finish.',
        approach: 'Mid iron into the closing green.',
        strategy: 'The view. SI 15, so only the 21s and 24s get a shot, and at 374 it is a fair rather than brutal finish. Exactly what you want if it comes down to the last, which at this tournament it tends to.',
        img: 'Nefyn Hole 18.JPG', note: null }
    ]
  },

  /* ==========================================================
     CONWY — ROUND 3 — Par 72, 6,476 yellow / 6,667 white
     ========================================================== */
  conwy: {
    key: 'conwy',
    name: 'Conwy Golf Club',
    round: 3,
    roundIndex: 2,
    day: 'Sunday 30 August',
    tee: '11:03',
    address: 'Beacons Way, Conwy, LL32 8ER',
    lat: 53.2900,
    lon: -3.8400,

    par: 72,
    yards: 6476,
    yardsWhite: 6667,
    yardsBlue: 6910,
    sss: null,

    summary: [
      'The championship test, and by a distance the longest card of the tour: 6,476 off the yellows against 5,965 at Porthmadog and 5,411 at Nefyn. Par 72 with four par 5s.',
      'The front nine is the shorter half at 3,185 and par 35, but it holds stroke index 1, 3, 5 and 7. The back nine is longer at 3,291 and par 37, with three par 5s in the five holes from the 10th to the 14th.',
      'Everything is decided here: the trophy, the medals and the Birdie Club pot. It is also the only course of the three whose card offers four genuine chances at a five.'
    ],

    localKnowledge: [
      'The scoring stretch is the 9th through the 14th: three par 5s, and only one hole inside the top ten by stroke index. If you are chasing on Sunday, those six holes are where you make your move.',
      'The front nine is where it gets taken away. The 5th is SI 1 at 435 yards, the 8th is SI 3 at 429 and the 7th is SI 7 at 428 — three long par 4s in a row from the 7th.',
      'The 17th is stroke index 2 at only 379 yards, so it is not length doing the damage. Second to last hole, hardest but one on the card, with the tournament likely still live.',
      'Very flat, and another solid coastal walk. At £40 it is the dearest buggy of the tour on the course that needs one least.',
      'If Option 3 is happening, cars come to Conwy loaded with clubs, evening attire and all seven players. Shower and change at the clubhouse, then ten minutes into Llandudno.'
    ],

    from: 'Tournament HQ',
    fromAddress: 'Aelfor, Ffordd Isaf, Harlech, LL46 2PR',
    driveNote: 'Roughly an hour and a half from Harlech, up through Snowdonia. The scenic route is also the slow one, so allow for it.',

    holes: [
      { no: 1, par: 4, yards: 359, yardsWhite: 368, si: 13,
        tee: 'A kind opener by this course\'s standards. Driver or three wood.',
        approach: 'Short to mid iron from around 130 to 150.',
        strategy: 'SI 13 is as gentle as Conwy gets on the front nine. Bank a par before the course starts asking questions.',
        img: 'Conwy Hole 01.JPG', note: null },

      { no: 2, par: 3, yards: 143, yardsWhite: 152, si: 15,
        tee: 'Wedge or short iron.',
        approach: null,
        strategy: 'One of only two holes on the front nine outside the top twelve by index. Take the green.',
        img: 'Conwy Hole 02.JPG', note: null },

      { no: 3, par: 4, yards: 320, yardsWhite: 333, si: 9,
        tee: 'The shortest par 4 on the course at 320. A three wood or long iron takes trouble out of play and leaves a full wedge.',
        approach: 'Wedge in from around 100.',
        strategy: 'Short and SI 9, with a shot for everyone. The last easy hole for a while, because the next five run at index 5, 1, 17, 7 and 3.',
        img: 'Conwy Hole 03.JPG', note: null },

      { no: 4, par: 4, yards: 383, yardsWhite: 393, si: 5,
        tee: 'Driver. The start of the hard stretch.',
        approach: 'Mid iron from around 150 to 170.',
        strategy: 'SI 5 and the first of the genuinely difficult holes. Everyone has a shot, so net par is a good hole.',
        img: 'Conwy Hole 04.JPG', note: null },

      { no: 5, par: 4, yards: 435, yardsWhite: 455, si: 1,
        tee: 'Stroke index 1, the longest par 4 on the course, and 20 yards longer again off the whites. Driver, and you still need a second good one.',
        approach: 'Fairway wood or hybrid for most of this group even after a solid drive.',
        strategy: 'The hardest hole of the tour. The 21s and 24s get two shots and should treat it as a par 6. Front of the green, take the bogey, walk to the 6th tee having lost nothing.',
        img: 'Conwy Hole 05.JPG', note: null },

      { no: 6, par: 3, yards: 167, yardsWhite: 178, si: 17,
        tee: 'Mid iron. A six iron number off the yellows.',
        approach: null,
        strategy: 'Rated the second easiest hole on the card and arriving immediately after the hardest. Only the 21s and 24s get a shot, so par is close to compulsory.',
        img: 'Conwy Hole 06.JPG', note: null },

      { no: 7, par: 4, yards: 428, yardsWhite: 439, si: 7,
        tee: 'Driver. The second of three long par 4s in a row.',
        approach: 'Long iron or hybrid.',
        strategy: 'The 5th, 7th and 8th are three of the four hardest holes on the card. Everyone gets a shot here, so net bogey is not a loss.',
        img: 'Conwy Hole 07.JPG', note: null },

      { no: 8, par: 4, yards: 429, yardsWhite: 441, si: 3,
        tee: 'Stroke index 3 at 429 yards. Driver.',
        approach: 'Long approach again. Take the front and putt from distance.',
        strategy: 'The 24s get two shots. Trying to force par here is how good rounds get wrecked. Take five and move on.',
        img: 'Conwy Hole 08.JPG', note: null },

      { no: 9, par: 5, yards: 521, yardsWhite: 531, si: 11,
        tee: 'The first par 5 of the day and a welcome sight after the 7th and 8th. Driver.',
        approach: 'A three-shot hole for most. Lay up to a full wedge number.',
        strategy: 'SI 11 with a shot for everyone. The scoring stretch starts here and runs to the 14th. Survive the front nine and there are points on the back.',
        img: 'Conwy Hole 09.JPG', note: null },

      { no: 10, par: 5, yards: 526, yardsWhite: 536, si: 10,
        tee: 'Back to back par 5s. Driver.',
        approach: 'The longest hole on the course at 526. Three shots, and lay up sensibly.',
        strategy: 'Everyone has a shot, so net par 6 on the longest hole on the card is very achievable.',
        img: 'Conwy Hole 10.JPG', note: null },

      { no: 11, par: 4, yards: 376, yardsWhite: 385, si: 4,
        tee: 'Driver. The hardest hole on the back nine.',
        approach: 'Mid iron from around 150.',
        strategy: 'SI 4 sitting in the middle of the easiest stretch of the course. Do not let it catch you cold between the two par 5s.',
        img: 'Conwy Hole 11.JPG', note: null },

      { no: 12, par: 5, yards: 494, yardsWhite: 503, si: 6,
        tee: 'The shortest par 5 on the card at 494, stroke index 6. Driver.',
        approach: 'Genuinely reachable in two with a good drive. The best eagle chance of the tour, which matters, because an eagle takes the entire Birdie Club pot.',
        strategy: 'A par 5 at SI 6 means everyone gets a shot and the higher handicaps get two. If you are chasing on Sunday, this is the hole.',
        img: 'Conwy Hole 12.JPG', note: null },

      { no: 13, par: 3, yards: 168, yardsWhite: 174, si: 12,
        tee: 'Mid iron.',
        approach: null,
        strategy: 'A breather between two par 5s. Take the green and keep the momentum.',
        img: 'Conwy Hole 13.JPG', note: null },

      { no: 14, par: 5, yards: 484, yardsWhite: 498, si: 16,
        tee: 'The last par 5, and the softest hole on the card by combination: 484 yards at stroke index 16. Driver.',
        approach: 'Short enough to have a go in two.',
        strategy: 'A sub-500 par 5 at SI 16 is the best birdie opportunity of the tournament. Only the 21s and 24s get a shot, so take the four rather than relying on it.',
        img: 'Conwy Hole 14.JPG', note: null },

      { no: 15, par: 3, yards: 147, yardsWhite: 153, si: 18,
        tee: 'Wedge or short iron.',
        approach: null,
        strategy: 'The easiest hole on the course. Nobody gets a shot except the 21s and 24s, so par is the expectation with three to play.',
        img: 'Conwy Hole 15.JPG', note: null },

      { no: 16, par: 4, yards: 353, yardsWhite: 364, si: 8,
        tee: 'Driver or three wood. A shorter par 4 to start the closing stretch.',
        approach: 'Short iron from around 120 to 140.',
        strategy: 'SI 8 with a shot for everyone. The last straightforward hole before the two that decide it.',
        img: 'Conwy Hole 16.JPG', note: null },

      { no: 17, par: 4, yards: 379, yardsWhite: 388, si: 2,
        tee: 'Stroke index 2 at only 379 yards, which means the difficulty is positional. Fairway is worth more than distance.',
        approach: 'Mid iron. Take the middle of the green.',
        strategy: 'Second hardest hole on the course, second from home, with the tournament almost certainly still live. The 21s and 24s get two shots. Whoever is leading takes their five and makes the chasers do something.',
        img: 'Conwy Hole 17.JPG', note: null },

      { no: 18, par: 4, yards: 364, yardsWhite: 376, si: 14,
        tee: 'The last hole of the Dragon Tour. Driver or three wood.',
        approach: 'Short to mid iron into the closing green.',
        strategy: 'SI 14 and 364 yards. A fair finishing hole rather than a brute, which is exactly what you want when it comes down to the final green. It did last year.',
        img: 'Conwy Hole 18.JPG', note: null }
    ]
  }
};
