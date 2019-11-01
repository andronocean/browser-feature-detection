// detect whether the browser supports async functions
// will not work with a CSP since Function() is blocked, unless 'unsafe-eval' is permitted
// (even though this doesn't do anything unsafe)


var supportsAsyncFunctions = (function() {
  try {
    new Function('(async function () {})')();
    return true;
  } catch (e) {
    if (e instanceof SyntaxError) {
      return false;
    } else {
      throw e; // blocked by CSP
    }
  }
})();


// resources that helped:
// https://stackoverflow.com/questions/46126977/can-i-detect-async-await-available-in-browser/46127053#46127053

// if you need to detect with a CSP in place, see https://stackoverflow.com/questions/43502448/how-to-detect-async-function-support-without-eval/46127368#46127368