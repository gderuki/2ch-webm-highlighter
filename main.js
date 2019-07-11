/**
 * Parses every post with a video attachment on a page.
 */
function parseVideoTitles() {
  var toBeHighlighted = [];
  var withAttachment = document.querySelectorAll('[class^=desktop]');

  filterOutNonVideoPosts(withAttachment, toBeHighlighted);
  performHighlighting(toBeHighlighted);
}

// Call method for the first time, so we have someting when we open page
parseVideoTitles();

// Select the node that will be observed for mutations (middle content div)
// since there is no ID, we use class to identify middle div's body.
var targetNode = document.getElementsByClassName('cntnt__right')[0];

var config = { attributes: true, childList: true, subtree: true };
var callback = function (mutationsList, observer) {
  for (var mutation of mutationsList) {
    if (mutation.type == 'childList') {
      parseVideoTitles();
    }
  }
};

// Observe
var observer = new MutationObserver(callback);
observer.observe(targetNode, config);
