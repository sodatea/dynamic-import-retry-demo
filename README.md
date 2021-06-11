# Retry Dynamic Import Shouldn't Be Cached

Reference: <https://github.com/tc39/ecma262/pull/1645>

1. Run `node server.js`
2. View `localhost:3000`
3. Click the button to initiate the first dynamic import call. We'll see an error logged to the page
4. Check the checkbox to make `lazy.js` available. The file content can be fetched now, as we can see on the page.
5. Click the button again to call `import('./lazy.js')` again.
6. It still fails, no network request sent. Another error message logged.

This works in Safari
