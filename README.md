# fia-test-web-google

A small standalone Google Apps Script web app. `doGet()` in `Code.gs` serves
`index.html` via `HtmlService`. No `package.json`, no npm build.

## Deploy

```
clasp push
# then deploy a new version in the Apps Script editor
```
