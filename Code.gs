// Google Apps Script — main entry point
// Serves the web app via HtmlService

function doGet(e) {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('Test Google Workspace App')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function doPost(e) {
  // Handle POST requests
  const data = JSON.parse(e.postData.contents);
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', received: data }))
    .setMimeType(ContentService.MimeType.JSON);
}
