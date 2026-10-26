/**
 * MISTERS 27 — AVAILABILITY COLLECTOR
 * ---------------------------------------------------------------
 * Paste this into Extensions → Apps Script on the Google Sheet,
 * then Deploy → New deployment → Web app:
 *     Execute as:     Me
 *     Who has access: Anyone
 * Copy the /exec URL it gives you into SHEET_ENDPOINT in
 * dates-2027.html.
 * ---------------------------------------------------------------
 * Writes one row per person. Sending again overwrites that
 * person's row rather than adding a duplicate, so the latest
 * submission always wins.
 */

var SHEET_NAME = 'Availability';
var FIXED_COLS = ['Name', 'Updated', 'Green', 'Amber', 'Red', 'Unmarked', 'Best weekends', 'All good weekends'];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);

  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    // A new sheet is only 26 columns wide. We need 8 + 108 = 116,
    // so widen it before writing anything or setValues throws.
    var needed = FIXED_COLS.length + data.dates.length;
    var have = sheet.getMaxColumns();
    if (have < needed) sheet.insertColumnsAfter(have, needed - have);

    // Build the header once, with every date as its own column
    if (sheet.getLastRow() === 0) {
      var header = FIXED_COLS.concat(data.dates.map(prettyDate));
      sheet.appendRow(header);
      sheet.setFrozenRows(1);
      sheet.setFrozenColumns(1);
      sheet.getRange(1, 1, 1, header.length)
           .setFontWeight('bold')
           .setBackground('#17110C')
           .setFontColor('#F4EDDD');
      applyColours(sheet, data.dates.length);
    }

    var row = [
      data.name || 'Unknown',
      new Date(),
      data.counts.G,
      data.counts.A,
      data.counts.R,
      data.counts.none,
      data.best || '',
      data.allGood || ''
    ].concat(data.values);

    // Replace this person's existing row if there is one
    var target = -1;
    var last = sheet.getLastRow();
    if (last > 1) {
      var names = sheet.getRange(2, 1, last - 1, 1).getValues();
      for (var i = 0; i < names.length; i++) {
        if (String(names[i][0]).trim().toLowerCase() === String(data.name).trim().toLowerCase()) {
          target = i + 2;
          break;
        }
      }
    }

    if (target === -1) target = sheet.getLastRow() + 1;
    sheet.getRange(target, 1, 1, row.length).setValues([row]);

    buildSummary(ss, data.dates);

    return json({ ok: true, row: target });

  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json({ ok: true, note: 'Misters 27 availability collector is live.' });
}

/* ---------- helpers ---------- */

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function prettyDate(iso) {
  var p = iso.split('-');
  var d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
  var dow = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()];
  var mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
             'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];
  return dow + ' ' + d.getDate() + ' ' + mon;
}

/** Red / amber / green fill on every date column */
function applyColours(sheet, dateCount) {
  var first = FIXED_COLS.length + 1;
  var range = sheet.getRange(2, first, 200, dateCount);
  var rules = sheet.getConditionalFormatRules();

  [['R', '#C0392B', '#FFFFFF'],
   ['A', '#C9951F', '#241A04'],
   ['G', '#4E8B4A', '#FFFFFF']].forEach(function (r) {
    rules.push(
      SpreadsheetApp.newConditionalFormatRule()
        .whenTextEqualTo(r[0])
        .setBackground(r[1])
        .setFontColor(r[2])
        .setRanges([range])
        .build()
    );
  });

  sheet.setConditionalFormatRules(rules);
}

/**
 * Rebuilds a "Summary" tab: one row per date with how many
 * people are green / amber / red, and a verdict for the group.
 */
function buildSummary(ss, dates) {
  var src = ss.getSheetByName(SHEET_NAME);
  var last = src.getLastRow();
  if (last < 2) return;

  var people = src.getRange(2, 1, last - 1, 1).getValues().map(function (r) { return r[0]; });
  var grid = src.getRange(2, FIXED_COLS.length + 1, last - 1, dates.length).getValues();

  var sum = ss.getSheetByName('Summary');
  if (!sum) sum = ss.insertSheet('Summary');
  sum.clear();
  sum.getRange(1, 1, 1, 6).setValues([['Date', 'Green', 'Amber', 'Red', 'Not marked', 'Verdict']])
     .setFontWeight('bold').setBackground('#17110C').setFontColor('#F4EDDD');
  sum.setFrozenRows(1);

  var out = [];
  for (var c = 0; c < dates.length; c++) {
    var g = 0, a = 0, r = 0, n = 0;
    for (var p = 0; p < grid.length; p++) {
      var v = String(grid[p][c] || '').trim();
      if (v === 'G') g++; else if (v === 'A') a++; else if (v === 'R') r++; else n++;
    }
    var verdict = r > 0 ? 'Blocked — ' + r + ' out'
                : (n > 0 ? 'Waiting on ' + n
                : (a === 0 ? 'EVERYONE GREEN' : 'All available (' + a + ' amber)'));
    out.push([prettyDate(dates[c]), g, a, r, n, verdict]);
  }

  sum.getRange(2, 1, out.length, 6).setValues(out);
  sum.autoResizeColumns(1, 6);

  var vr = sum.getRange(2, 6, out.length, 1);
  var rules = [];
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo('EVERYONE GREEN').setBackground('#4E8B4A').setFontColor('#FFFFFF')
    .setRanges([vr]).build());
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenTextStartsWith('All available').setBackground('#C9951F').setFontColor('#241A04')
    .setRanges([vr]).build());
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenTextStartsWith('Blocked').setBackground('#C0392B').setFontColor('#FFFFFF')
    .setRanges([vr]).build());
  sum.setConditionalFormatRules(rules);
}
