// script to remove the "what's happening" section on Twitter
(function() {
  // https://stackoverflow.com/questions/18432072/x-function-is-not-defined-inside-a-chrome-extension-content-script
  function xPath(xpathToExecute) {
    const result = [];
    const nodesSnapshot = document.evaluate(xpathToExecute, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0; i < nodesSnapshot.snapshotLength; i++) {
      result.push(nodesSnapshot.snapshotItem(i));
    }
    return result;
  }

  function removeWhatsHappening() {
    const maxAttempts = 5;
    const interval = 500;

    let attempts = 0;
    let t = setInterval(() => {
      if (attempts > maxAttempts) {
        console.error('Could not remove element in', maxAttempts, 'attempts');
        clearInterval(t);
      }

      try {
        const target = xPath(`//span[text()='What’s happening']`)[0].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        const parent = target.parentElement;
        parent.removeChild(target);
        clearInterval(t);
      } catch (e) {}
      attempts++;
    }, interval);
  }

  // very hacky, but just run this every second.
  setInterval(() => {
    removeWhatsHappening();
  }, 1000);
})();
