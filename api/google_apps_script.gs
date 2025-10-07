/**
 * Google Apps Script to accept POSTs and append to Google Sheets.
 *
 * Update SPREADSHEET_ID with your sheet ID.
 * Deploy as Web App (New deployment) with access set appropriately.
 */

var SPREADSHEET_ID = '1SG9hpzAwvZ9SN97bCAzw41s5lp9jd1Gl4Z_tBH7q_XM';

function doPost(e) {
  try {
    var raw = (e.postData && e.postData.contents) ? e.postData.contents : '{}';
    var data = JSON.parse(raw);

    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);

    // Determine destination sheet
    var sheetName = data.sheetName || (data.formType === 'contact' ? 'ContactUs' : 'ApplyForm');
    var sheet = ss.getSheetByName(sheetName);
    if (!sheet) sheet = ss.insertSheet(sheetName);

    // Normalize and build row depending on sheet
    var row = [];
    if (sheetName === 'ContactUs') {
      // Expected columns: Name, Email, Mobile, Subject, Message, Timestamp
      row = [
        data.Name || data.name || '',
        data.Email || data.email || '',
        data.Mobile || data.mobile || '',
        data.Subject || data.subject || '',
        data.Message || data.message || '',
        new Date().toLocaleString()
      ];
      // Ensure headers
      ensureHeaders(sheet, ['Name', 'Email', 'Mobile', 'Subject', 'Message', 'Timestamp']);
    } else {
      // ApplyForm / Admissions
      // Expected columns: Name, Email, Mobile, State, City, Course, College, Timestamp
      row = [
        data.name || data.Name || '',
        data.email || data.Email || '',
        data.mobile || data.Mobile || '',
        data.state || data.State || '',
        data.city || data.City || '',
        data.course || data.Course || '',
        data.college || data.College || '',
        new Date().toLocaleString()
      ];
      ensureHeaders(sheet, ['Name', 'Email', 'Mobile', 'State', 'City', 'Course', 'College', 'Timestamp']);
    }

    sheet.appendRow(row);

    return jsonResponse({ result: 'success', message: 'Row appended', sheet: sheetName });
  } catch (error) {
    return jsonResponse({ result: 'error', message: String(error) }, 500);
  }
}

function ensureHeaders(sheet, headers) {
  var existing = sheet.getRange(1, 1, 1, Math.max(1, sheet.getLastColumn())).getValues()[0];
  var empty = existing.join('').trim() === '';
  if (empty) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
}

function doGet(e) {
  return jsonResponse({ result: 'ok', message: 'Deployment active' });
}

function doOptions(e) {
  // Respond to preflight requests; Apps Script may not always allow custom headers to be set.
  var t = ContentService.createTextOutput('');
  try {
    t.setMimeType(ContentService.MimeType.JSON);
  } catch (err) {}
  return t;
}

function jsonResponse(obj, statusCode) {
  statusCode = statusCode || 200;
  var t = ContentService.createTextOutput(JSON.stringify(obj));
  t.setMimeType(ContentService.MimeType.JSON);
  return t;
}
/**
 * Google Apps Script: receive JSON POSTs and append rows to specified sheet/tab
 *
 * Instructions:
 * 1. Replace SPREADSHEET_ID with your Google Sheet ID (the long id in the sheet URL).
 * 2. Deploy this script as a Web App (Publish > Deploy > New deployment) and set access to "Anyone" or "Anyone, even anonymous".
 * 3. Use the web app URL (ending with /exec) as the endpoint for your frontend or proxy.
 *
 * Expected JSON payloads from the frontend:
 * - Contact form: { formType: 'contact', sheetName: 'ContactUs', Name, Email, Mobile, Subject, Message }
 * - Admission form: { formType: 'admission', sheetName: 'Admissions', name, email, mobile, state, city, course }
 * The script maps header names on the sheet to incoming fields (case-insensitive) and will create the sheet if missing.
 */

// TODO: set this to your spreadsheet id
var SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';

function doPost(e) {
  try {
    var raw = (e.postData && e.postData.contents) ? e.postData.contents : '{}';
    var data = JSON.parse(raw);

    // Determine sheet name: prefer sheetName field, fallback by formType
    var sheetName = data.sheetName || (data.formType === 'admission' ? 'Admissions' : 'ContactUs');

    if (!SPREADSHEET_ID || SPREADSHEET_ID === 'YOUR_SPREADSHEET_ID_HERE') {
      return jsonResponse({ result: 'error', message: 'SPREADSHEET_ID not configured in script.' }, 500);
    }

    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }

    // Ensure headers exist; if not, seed sensible defaults based on sheetName
    var lastCol = Math.max(sheet.getLastColumn(), 1);
    var headerRange = sheet.getRange(1, 1, 1, lastCol);
    var headers = headerRange.getValues()[0];
    var headersEmpty = headers.join('').trim() === '';

    if (headersEmpty) {
      var defaultHeaders = (sheetName === 'ContactUs') ?
        ['Name', 'Email', 'Mobile', 'Subject', 'Message'] :
        ['Name', 'Email', 'Mobile', 'State', 'City', 'Course'];
      sheet.getRange(1, 1, 1, defaultHeaders.length).setValues([defaultHeaders]);
      headers = defaultHeaders;
    }

    // Build a row by mapping each header to a value in the incoming data (case-insensitive)
    var row = headers.map(function(h) {
      var v = getFieldValue(data, h);
      return v;
    });

    sheet.appendRow(row);

    return jsonResponse({ result: 'success', message: 'Row appended', sheet: sheetName });
  } catch (err) {
    return jsonResponse({ result: 'error', message: String(err) }, 500);
  }
}

function doGet(e) {
  return jsonResponse({ result: 'ok', message: 'Deployment active' });
}

// Helper: return value from data by trying multiple case variants of key
function getFieldValue(data, header) {
  if (!data) return '';
  // Direct match
  if (data.hasOwnProperty(header)) return data[header];
  // lower-case key
  var lower = header.toLowerCase();
  if (data.hasOwnProperty(lower)) return data[lower];
  // uncapitalized (e.g., 'Name' -> 'name')
  var uncap = header.charAt(0).toLowerCase() + header.slice(1);
  if (data.hasOwnProperty(uncap)) return data[uncap];
  // try replacing spaces with empty and lower
  var keyNoSpace = header.replace(/\s+/g, '').toLowerCase();
  for (var k in data) {
    if (!data.hasOwnProperty(k)) continue;
    if (k.replace(/\s+/g, '').toLowerCase() === keyNoSpace) return data[k];
  }
  return '';
}

function jsonResponse(obj, statusCode) {
  statusCode = statusCode || 200;
  var t = ContentService.createTextOutput(JSON.stringify(obj));
  t.setMimeType(ContentService.MimeType.JSON);
  // Note: Apps Script doesn't provide a direct API to set CORS headers. When you deploy the web app
  // with access set to 'Anyone, even anonymous' and call it via fetch from a browser, cross-origin
  // requests are generally allowed. If you encounter CORS issues, consider using a server-side proxy
  // (like the existing PHP proxy) which can set Access-Control-Allow-Origin headers.
  return t;
}
