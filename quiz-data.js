/* ============================================================
   MISTERS 26 — HOW WELL DO YOU KNOW THE LADS?
   ------------------------------------------------------------
   Every answer is taken verbatim from the pre-trip questionnaire
   completed by all seven players.
   `a` is the index of the correct option in `o`.
   ============================================================ */

var QUIZ = [
  { q: 'All seven were asked: “Will you win some money in Misters 26?” How many said yes?',
    o: ['Three', 'Five', 'Six', 'All seven'], a: 3,
    n: 'Unanimous. Not one man in the field backed himself to lose, which is mathematically interesting given only one team can win.' },

  { q: 'Who described themselves in one word as “Inevitable”?',
    o: ['Rob', 'John', 'Brett', 'Steve'], a: 0,
    n: 'Rob. One word, full stop, no elaboration. Thanos energy from the tour organiser.' },

  { q: 'Which player answered the one-word question with “Cigar-Smoking-Cowboy”?',
    o: ['Adam', 'John', 'Phil', 'Brett'], a: 1,
    n: 'John. Technically three words joined by hyphens, which tells you everything about how he approaches a rule.' },

  { q: 'Adam is MOST looking forward to jacuzzi stories. What is he LEAST looking forward to?',
    o: ['The Welsh weather', 'The drive home', 'John’s jacuzzi stories', 'Day three golf'], a: 2,
    n: 'Both his answers are about jacuzzi stories. He wants the genre, he just does not want John’s contribution to it.' },

  { q: 'John was asked what he is most looking forward to. What did he say?',
    o: ['The first tee', 'Phil’s socks', 'The hot tub', 'Beating Brett'], a: 1,
    n: '“Phil’s socks.” No further explanation was offered, and frankly none is needed.' },

  { q: 'Which player is least looking forward to “travelling by car and not a private chopper”?',
    o: ['Phil', 'Brett', 'Sam', 'Adam'], a: 1,
    n: 'Brett. The Lone Wolf would prefer to arrive by air.' },

  { q: 'Who answered the “least looking forward to” question with “Coxy not being there”?',
    o: ['John', 'Rob', 'Steve', 'Phil'], a: 0,
    n: 'John. The only man to name the absent friend rather than the weather or the hangover.' },

  { q: 'One player said he is least looking forward to absolutely nothing, answering “Nothing, I’m very excited.” Who?',
    o: ['Sam', 'Adam', 'Steve', 'Brett'], a: 2,
    n: 'Steve. The defending champion, refusing to find a downside.' },

  { q: 'Who described themselves as a golfer as “Constantly evolving and perpetually disappointed”?',
    o: ['Phil', 'Rob', 'Brett', 'Sam'], a: 1,
    n: 'Rob. Sixteen pars in Portugal and still perpetually disappointed.' },

  { q: 'Which player summed up his own golf as simply “Not very good”?',
    o: ['Steve', 'Brett', 'Phil', 'Adam'], a: 0,
    n: 'Steve. Second-highest points scorer in the field last year, and this is his self-assessment.' },

  { q: 'Who described himself as “Bags of potential which is often left at home”?',
    o: ['Adam', 'John', 'Sam', 'Phil'], a: 2,
    n: 'Sam. A man who opened Portugal with 38 points and closed it with 20.' },

  { q: 'Which player described his own golf using only the phrase “Bobby-Shapiro”?',
    o: ['John', 'Adam', 'Brett', 'Steve'], a: 0,
    n: 'John. The running gag from Portugal 2025 lives on, and has now been entered into an official questionnaire.' },

  { q: 'Sam is famous for his driving. Where did he rank driving among his own seven attributes?',
    o: ['First', 'Third', 'Sixth', 'Second'], a: 2,
    n: 'Sixth of seven. The man they call Big Daddy Driver put it second from bottom, above only consistency.' },

  { q: 'Rob ranked his seven attributes strongest to weakest. What did he put LAST?',
    o: ['Putting', 'Driving', 'Flair and creativity', 'Short game'], a: 1,
    n: 'Driving, dead last. Which is exactly why he plays a five-wood off the tee.' },

  { q: 'Which attribute did Rob rank as his single strongest?',
    o: ['Iron play', 'Consistency', 'Mentality', 'Short game'], a: 2,
    n: 'Mentality. Steve ranked it first too — the only thing those two agree on.' },

  { q: 'Adam ranked one attribute top of his list. Which?',
    o: ['Driving', 'Flair and creativity', 'Iron play', 'Short game'], a: 1,
    n: 'Flair and creativity — and he put putting dead last, which is a bold combination.' },

  { q: 'Two players named Sam as their rival. Who were they?',
    o: ['Rob and Steve', 'Adam and Phil', 'John and Brett', 'Steve and John'], a: 1,
    n: 'Adam and Phil both went for Sam. Sam himself named Steve.' },

  { q: 'Who did John name as his rival?',
    o: ['Sam', 'Rob', 'Brett', 'Adam'], a: 2,
    n: 'Brett. The only man to pick the wildcard — and Brett named Steve rather than returning the compliment.' },

  { q: 'Given £1 to bet on something happening to him on tour, one player chose “Being on the wrong end of a Sitch trouser ball”. Who?',
    o: ['Phil', 'Adam', 'Brett', 'Steve'], a: 2,
    n: 'Brett. A very specific fear, specifically named.' },

  { q: 'Which team received the most first-place predictions across all seven questionnaires?',
    o: ['The Mailin Men', 'The Sultans of Swing', 'The ChampionDogs', 'A three-way tie'], a: 1,
    n: 'The Sultans of Swing, with three — from Adam, Rob and John. The other two teams got two each. Rob picked the Sultans ahead of his own team.' }
];

var BANDS = [
  { min: 20, name: 'HOLE IN ONE',   line: 'Twenty out of twenty. You either have a photographic memory or you filled in more than one of these forms yourself.' },
  { min: 18, name: 'ALBATROSS',     line: 'Outstanding. You listen when these men talk, which is more than most of them manage for each other.' },
  { min: 16, name: 'EAGLE',         line: 'Serious knowledge. You have earned the right to be smug about this in the group chat.' },
  { min: 14, name: 'BIRDIE',        line: 'Under par and comfortable. You know the lads well and it shows.' },
  { min: 12, name: 'PAR',           line: 'Solid, respectable, nothing to apologise for. Very Rob McGrath of you.' },
  { min: 10, name: 'BOGEY',         line: 'You got round. It was not pretty, but you got round.' },
  { min: 8,  name: 'DOUBLE BOGEY',  line: 'Some real gaps here. Have a read of the team pages and come back.' },
  { min: 5,  name: 'TRIPLE BOGEY',  line: 'Rough. You have been on the trips — were you paying attention on any of them?' },
  { min: 0,  name: 'OUT OF BOUNDS', line: 'Reload. Are you certain you are on the right website?' }
];
