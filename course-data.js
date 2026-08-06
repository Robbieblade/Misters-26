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
      'The shortest of the three and the gentlest walk, which is the case for leaving the £40 buggies alone. Par 71 off the yellows at under 6,000 yards, with an out half of 3,058 and a slightly shorter back nine at 2,907.',
      'The card tells you where the round is decided. Four of the five hardest holes by stroke index sit on the back nine, and the 14th and 15th come at you back to back off SI 1 and SI 3. The front is where you bank shots, particularly the run from the 7th to the 9th where three of the four easiest holes on the course sit together.'
    ],

    localKnowledge: [
      'Two par 5s back to back at the 7th and 8th, both under 500 yards off the yellows, stroke index 14 and 10. That is the birdie window and everyone in the group gets a shot on both.',
      'The 12th is 275 yards off the yellow and 351 off the white, the biggest tee-to-tee gap on the card by some way. Confirm which markers we are on before anyone pulls driver.',
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
        note: null },

      { no: 2, par: 3, yards: 122, yardsWhite: 122, si: 16,
        tee: 'Short iron or wedge. Same yardage off both tees.',
        approach: null,
        strategy: 'One of the easier holes on the card at SI 16, but short par 3s punish a lazy swing more than long ones do. Middle of the green is a good result.',
        note: null },

      { no: 3, par: 5, yards: 515, yardsWhite: 527, si: 8,
        tee: 'The longest hole on the course. Driver, and it still will not be reachable for anyone in this group.',
        approach: 'A genuine three-shotter. Lay up to a full wedge number rather than scrambling from 40 yards.',
        strategy: 'SI 8 with a shot for everyone. Treat it as net par 6 and a five is a very good hole.',
        note: null },

      { no: 4, par: 4, yards: 436, yardsWhite: 454, si: 2,
        tee: 'The second hardest hole on the card and the longest par 4 by 50 yards. Driver, no question.',
        approach: 'Long. A fairway wood or hybrid for most of the group even after a good drive.',
        strategy: 'Stroke index 2, so the higher handicaps get two shots. Play it as a par 5, take the front of the green, and do not chase it.',
        note: null },

      { no: 5, par: 4, yards: 377, yardsWhite: 388, si: 4,
        tee: 'Driver. SI 4 says this one has teeth despite the modest yardage.',
        approach: 'Mid iron. Around 150 after a decent tee shot.',
        strategy: 'The third hole of a demanding opening stretch. Net par here is a shot gained on the field.',
        note: null },

      { no: 6, par: 3, yards: 141, yardsWhite: 148, si: 12,
        tee: 'Short to mid iron.',
        approach: null,
        strategy: 'Nothing on the card suggests difficulty. Take the green and move on.',
        note: null },

      { no: 7, par: 5, yards: 495, yardsWhite: 513, si: 14,
        tee: 'Driver. The first of two par 5s in a row.',
        approach: 'Under 500 yards, so a good drive leaves a fairway wood with a genuine look at getting close.',
        strategy: 'Stroke index 14 on a par 5 is the softest combination on the card. Everyone has a shot, which makes it net par 6. This is a hole to attack.',
        note: null },

      { no: 8, par: 5, yards: 462, yardsWhite: 476, si: 10,
        tee: 'The shortest par 5 on the course at 462 off the yellows. Driver and you are thinking about the green.',
        approach: 'Genuinely reachable in two for the longer hitters. For everyone else a lay-up to a full wedge is the higher-percentage play.',
        strategy: 'Back to back par 5s at SI 14 and 10. If the round is going to turn positive it happens across the 7th and 8th.',
        note: null },

      { no: 9, par: 3, yards: 158, yardsWhite: 160, si: 18,
        tee: 'Mid iron. A seven iron number off the yellows.',
        approach: null,
        strategy: 'The easiest hole on the course by stroke index, so only the 21s and 24s get a shot. Par matters more here than anywhere.',
        note: null },

      { no: 10, par: 4, yards: 369, yardsWhite: 376, si: 11,
        tee: 'Driver. Standard length par 4 to open the back nine.',
        approach: 'Around 140 to 160 in.',
        strategy: 'A breather before the difficult stretch arrives. Take your par and get to the 11th tee in credit.',
        note: null },

      { no: 11, par: 3, yards: 199, yardsWhite: 218, si: 5,
        tee: 'The long one. 199 off the yellow and 218 off the white, so a hybrid or fairway wood for most of the group.',
        approach: null,
        strategy: 'Stroke index 5 on a par 3, which tells you the club knows it is brutal. Front edge is a fine result and everyone gets a shot, so net par is a four.',
        note: null },

      { no: 12, par: 4, yards: 275, yardsWhite: 351, si: 15,
        tee: 'The big decision hole. 275 off the yellows puts the green in range for the longer hitters. Off the whites it is 351 and a normal par 4.',
        approach: 'If you lay back, leave yourself a full wedge rather than a half shot.',
        strategy: 'SI 15 and short. The card is offering a birdie. Decide on the tee whether you are the man to take it, and if your partner has already found trouble, take the safe route.',
        note: null },

      { no: 13, par: 3, yards: 187, yardsWhite: 201, si: 13,
        tee: 'Long iron or hybrid.',
        approach: null,
        strategy: 'The second of three par 3s on the back nine, two of which play long. Bogey is not a disaster with a shot in hand.',
        note: null },

      { no: 14, par: 4, yards: 378, yardsWhite: 387, si: 1,
        tee: 'Stroke index 1. Driver, and a good one.',
        approach: 'Mid iron from around 150 to 160.',
        strategy: 'The hardest hole on the course and not the longest, which usually means the trouble is positional rather than about length. Take the middle of the green. The 24s get two shots, so a six is still a point.',
        note: null },

      { no: 15, par: 4, yards: 342, yardsWhite: 379, si: 3,
        tee: 'Short par 4 at 342 but stroke index 3. That combination almost always means position off the tee matters more than distance.',
        approach: 'A wedge or short iron. No excuses from that range.',
        strategy: 'Back to back off SI 1 and SI 3. Get through the 14th and 15th at net level and the round is intact.',
        note: null },

      { no: 16, par: 4, yards: 312, yardsWhite: 329, si: 17,
        tee: 'Short, and rated the second easiest hole on the card. A three wood or long iron is plenty to leave a full wedge.',
        approach: 'Wedge in. This is a birdie look.',
        strategy: 'SI 17, so only the 21s and 24s get a shot. Coming straight after the two hardest holes, this is where you claw it back.',
        note: null },

      { no: 17, par: 5, yards: 464, yardsWhite: 488, si: 7,
        tee: 'The last par 5 and the second shortest on the card at 464. Driver.',
        approach: 'Reachable in two with a good drive. Worth the look at this stage of the round.',
        strategy: 'Everyone gets a shot at SI 7. A five is net four and a serious contribution to the better ball with one hole left.',
        note: null },

      { no: 18, par: 4, yards: 381, yardsWhite: 403, si: 9,
        tee: 'Driver. A proper closing par 4 and the longest of the last four holes.',
        approach: 'Mid iron in front of whoever is on the clubhouse terrace.',
        strategy: 'SI 9 and a shot for all seven. Net par to finish round one of the tour.',
        note: null }
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

    // CONFIRMED: playing Front + New (The Point).
    combination: 'Front nine + The Point',
    par: 71,
    yards: 6309,
    yardsWhite: 6520,
    sss: 71,

    // Neither the Front nine nor The Point card has been supplied yet.
    // The figures below are derived from the three combination totals
    // printed on the Old nine card, and cross-check exactly against the
    // New+Old total, so they are sound.
    missingFront: true,
    missingFrontNote: 'The card supplied covers the <strong>Old nine only</strong>, which we are no longer playing as part of the round. ' +
      'For Front + The Point I need both of those cards. From the combination totals on the Old card, the <strong>Front nine is par 35, 3,048 yards yellow (3,164 white)</strong> ' +
      'and <strong>The Point is par 36, 3,261 yellow (3,356 white)</strong>. Those figures cross-check exactly against the printed New+Old total, so they are reliable. ' +
      'Send the two cards and all eighteen holes fill in here.',

    summary: [
      'Clifftop golf on the Llŷn Peninsula and the reason this trip exists. The club has 26 holes: a shared Front nine, then either the Old nine or the New nine out on The Point, a finger of land running into the Irish Sea with water on three sides.',
      'We are playing Front and The Point: par 71, 6,309 yards off the yellows. That is 900 yards longer than the Front and Old combination and only 170 short of Conwy, which makes this the second longest card of the tour rather than the shortest.',
      'The Point is a full nine at par 36 and 3,261 yards, not the short novelty loop it is sometimes described as. On an exposed headland with the sea on both sides, the wind will decide the round.'
    ],

    localKnowledge: [
      'Get The Point confirmed in writing. The club\'s note on the Golfbreaks booking states no tee times on The Point after 10:30 on Saturdays and Sundays, and none during school holidays or bank holidays. Our tee is 11:10 on a Saturday in late August. If it has been cleared verbally, get an email so the starter has it too.',
      'From the club\'s printed local rules for The Point: on the <strong>2nd</strong>, the course boundary is the white posts running along the practice ground side of the hedge. On the <strong>3rd</strong>, the boundary is the wire fence in the adjacent field. Both are out of bounds.',
      'On the Front nine, ditches on the <strong>3rd and 7th</strong> are marked with yellow posts at their ends, and those posts are movable obstructions. The black and white fairway guide posts are movable too.',
      'Front nine practicalities from the card: safety mesh fence at the 1st tee, and a toilet to the right of the 5th green. Both are immovable obstructions, so you get relief from either.',
      'Sprinkler heads close to the putting green carry additional relief beyond Rule 24-2. Worth knowing on a course where the greens sit in exposed positions.',
      'The Tŷ Coch Inn is on the beach at Porthdinllaen below the course, and is one of the great pub locations anywhere. Post-round, not mid-round.',
      'Hilliest course of the three at £25 a buggy, comfortably the best value on the tour. On the longer Point combination that £25 is worth more still.'
    ],

    from: 'Tournament HQ',
    fromAddress: 'Aelfor, Ffordd Isaf, Harlech, LL46 2PR',
    driveNote: 'Around an hour from Harlech, round the top of Cardigan Bay. The A487 is slow in late August holiday traffic and an 11:10 tee gives less slack than it looks. Check it on the morning.',

    // The Old nine is no longer part of the round, but the data is real
    // and the nine may still get played as an extra. Kept and labelled.
    holesLabel: 'The Old nine',
    holesIntro: 'Not part of the tournament round now that The Point is confirmed, but this is the nine we have a card for, and it may still get played as an extra. ' +
      'The stroke indexes shown apply when the Old nine is paired with the Front nine, so they do not carry over to the Point round.',

    holes: [
      { no: 1, oldNo: 1, par: 4, yards: 307, yardsWhite: 327, si: 11,
        name: 'Henblas',
        tee: 'Short par 4. Three wood or long iron leaves a full wedge.',
        approach: 'Wedge from around 100.',
        strategy: 'A gentle opener at SI 11 with a shot for everyone.',
        note: null },

      { no: 2, oldNo: 2, par: 3, yards: 129, yardsWhite: 129, si: 15,
        name: 'Pant',
        tee: 'Short iron or wedge. Identical off both tees.',
        approach: null,
        strategy: 'At 129 yards the wind is the entire hole. Take the club the flag says, not the club the yardage says.',
        note: null },

      { no: 3, oldNo: 3, par: 3, yards: 150, yardsWhite: 157, si: 5,
        name: 'T\u0177 Coch',
        tee: 'Mid iron. A seven iron number.',
        approach: null,
        strategy: 'Stroke index 5 on a 150 yard par 3 is a warning. The local rules confirm the \'Pot\' water hazard is in play here and you may not play from it.',
        note: null },

      { no: 4, oldNo: 4, par: 4, yards: 405, yardsWhite: 411, si: 1,
        name: 'Pendraw',
        tee: 'Stroke index 1 and the only hole over 400 yards on this nine. Driver.',
        approach: 'Long iron or hybrid.',
        strategy: 'The hardest hole on the Old nine. Play for net bogey and take anything better.',
        note: null },

      { no: 5, oldNo: 5, par: 3, yards: 155, yardsWhite: 158, si: 13,
        name: 'Bad Achub',
        tee: 'Mid iron.',
        approach: null,
        strategy: 'Welsh for lifeboat. The local rules note the fence surrounding Lifeboat Bay is the one boundary on the property that is not out of bounds.',
        note: null },

      { no: 6, oldNo: 6, par: 4, yards: 317, yardsWhite: 320, si: 7,
        name: 'Pen Cei',
        tee: 'Short par 4 at 317. Position over power.',
        approach: 'A wedge or short iron.',
        strategy: 'SI 7 despite the length, so there is trouble the yardage does not show.',
        note: null },

      { no: 7, oldNo: 7, par: 3, yards: 149, yardsWhite: 180, si: 9,
        name: 'Pot',
        tee: '149 off the yellow and 180 off the white, the biggest gap on this nine.',
        approach: null,
        strategy: 'Named after the water hazard, which is in play here and cannot be played from. The hole tells you where not to go.',
        note: null },

      { no: 8, oldNo: 8, par: 5, yards: 477, yardsWhite: 502, si: 3,
        name: 'Roced',
        tee: 'The only par 5 on the nine. Driver.',
        approach: 'Reachable in two at 477, but Annie\'s Gully runs down the right hand side half way along. The left side is the play.',
        strategy: 'The biggest scoring chance on this nine, though the gully makes the aggressive line expensive.',
        note: null },

      { no: 9, oldNo: 9, par: 4, yards: 274, yardsWhite: 324, si: 17,
        name: 'Adref',
        tee: 'Homeward. 274 off the yellows brings the green into range.',
        approach: 'Short wedge if you lay back.',
        strategy: 'The easiest hole on the nine and short enough to finish on a birdie.',
        note: null }
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
      'Flat walking, so the £40 buggy is a luxury rather than a need.',
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
        note: null },

      { no: 2, par: 3, yards: 143, yardsWhite: 152, si: 15,
        tee: 'Wedge or short iron.',
        approach: null,
        strategy: 'One of only two holes on the front nine outside the top twelve by index. Take the green.',
        note: null },

      { no: 3, par: 4, yards: 320, yardsWhite: 333, si: 9,
        tee: 'The shortest par 4 on the course at 320. A three wood or long iron takes trouble out of play and leaves a full wedge.',
        approach: 'Wedge in from around 100.',
        strategy: 'Short and SI 9, with a shot for everyone. The last easy hole for a while, because the next five run at index 5, 1, 17, 7 and 3.',
        note: null },

      { no: 4, par: 4, yards: 383, yardsWhite: 393, si: 5,
        tee: 'Driver. The start of the hard stretch.',
        approach: 'Mid iron from around 150 to 170.',
        strategy: 'SI 5 and the first of the genuinely difficult holes. Everyone has a shot, so net par is a good hole.',
        note: null },

      { no: 5, par: 4, yards: 435, yardsWhite: 455, si: 1,
        tee: 'Stroke index 1, the longest par 4 on the course, and 20 yards longer again off the whites. Driver, and you still need a second good one.',
        approach: 'Fairway wood or hybrid for most of this group even after a solid drive.',
        strategy: 'The hardest hole of the tour. The 21s and 24s get two shots and should treat it as a par 6. Front of the green, take the bogey, walk to the 6th tee having lost nothing.',
        note: null },

      { no: 6, par: 3, yards: 167, yardsWhite: 178, si: 17,
        tee: 'Mid iron. A six iron number off the yellows.',
        approach: null,
        strategy: 'Rated the second easiest hole on the card and arriving immediately after the hardest. Only the 21s and 24s get a shot, so par is close to compulsory.',
        note: null },

      { no: 7, par: 4, yards: 428, yardsWhite: 439, si: 7,
        tee: 'Driver. The second of three long par 4s in a row.',
        approach: 'Long iron or hybrid.',
        strategy: 'The 5th, 7th and 8th are three of the four hardest holes on the card. Everyone gets a shot here, so net bogey is not a loss.',
        note: null },

      { no: 8, par: 4, yards: 429, yardsWhite: 441, si: 3,
        tee: 'Stroke index 3 at 429 yards. Driver.',
        approach: 'Long approach again. Take the front and putt from distance.',
        strategy: 'The 24s get two shots. Trying to force par here is how good rounds get wrecked. Take five and move on.',
        note: null },

      { no: 9, par: 5, yards: 521, yardsWhite: 531, si: 11,
        tee: 'The first par 5 of the day and a welcome sight after the 7th and 8th. Driver.',
        approach: 'A three-shot hole for most. Lay up to a full wedge number.',
        strategy: 'SI 11 with a shot for everyone. The scoring stretch starts here and runs to the 14th. Survive the front nine and there are points on the back.',
        note: null },

      { no: 10, par: 5, yards: 526, yardsWhite: 536, si: 10,
        tee: 'Back to back par 5s. Driver.',
        approach: 'The longest hole on the course at 526. Three shots, and lay up sensibly.',
        strategy: 'Everyone has a shot, so net par 6 on the longest hole on the card is very achievable.',
        note: null },

      { no: 11, par: 4, yards: 376, yardsWhite: 385, si: 4,
        tee: 'Driver. The hardest hole on the back nine.',
        approach: 'Mid iron from around 150.',
        strategy: 'SI 4 sitting in the middle of the easiest stretch of the course. Do not let it catch you cold between the two par 5s.',
        note: null },

      { no: 12, par: 5, yards: 494, yardsWhite: 503, si: 6,
        tee: 'The shortest par 5 on the card at 494, stroke index 6. Driver.',
        approach: 'Genuinely reachable in two with a good drive. The best eagle chance of the tour, which matters, because an eagle takes the entire Birdie Club pot.',
        strategy: 'A par 5 at SI 6 means everyone gets a shot and the higher handicaps get two. If you are chasing on Sunday, this is the hole.',
        note: null },

      { no: 13, par: 3, yards: 168, yardsWhite: 174, si: 12,
        tee: 'Mid iron.',
        approach: null,
        strategy: 'A breather between two par 5s. Take the green and keep the momentum.',
        note: null },

      { no: 14, par: 5, yards: 484, yardsWhite: 498, si: 16,
        tee: 'The last par 5, and the softest hole on the card by combination: 484 yards at stroke index 16. Driver.',
        approach: 'Short enough to have a go in two.',
        strategy: 'A sub-500 par 5 at SI 16 is the best birdie opportunity of the tournament. Only the 21s and 24s get a shot, so take the four rather than relying on it.',
        note: null },

      { no: 15, par: 3, yards: 147, yardsWhite: 153, si: 18,
        tee: 'Wedge or short iron.',
        approach: null,
        strategy: 'The easiest hole on the course. Nobody gets a shot except the 21s and 24s, so par is the expectation with three to play.',
        note: null },

      { no: 16, par: 4, yards: 353, yardsWhite: 364, si: 8,
        tee: 'Driver or three wood. A shorter par 4 to start the closing stretch.',
        approach: 'Short iron from around 120 to 140.',
        strategy: 'SI 8 with a shot for everyone. The last straightforward hole before the two that decide it.',
        note: null },

      { no: 17, par: 4, yards: 379, yardsWhite: 388, si: 2,
        tee: 'Stroke index 2 at only 379 yards, which means the difficulty is positional. Fairway is worth more than distance.',
        approach: 'Mid iron. Take the middle of the green.',
        strategy: 'Second hardest hole on the course, second from home, with the tournament almost certainly still live. The 21s and 24s get two shots. Whoever is leading takes their five and makes the chasers do something.',
        note: null },

      { no: 18, par: 4, yards: 364, yardsWhite: 376, si: 14,
        tee: 'The last hole of the Dragon Tour. Driver or three wood.',
        approach: 'Short to mid iron into the closing green.',
        strategy: 'SI 14 and 364 yards. A fair finishing hole rather than a brute, which is exactly what you want when it comes down to the final green. It did last year.',
        note: null }
    ]
  }
};
