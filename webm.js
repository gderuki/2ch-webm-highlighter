/**
 * Parses every post with a video attachment on a page.
 */
function parseVideoTitles() {
  var toBeHighlighted = [];
  // Get all posts with attachments
  var withAttachment = document.querySelectorAll('[class^=desktop]');

  // Filter out anything that isn't video
  filterOutNonVideoPosts(withAttachment, toBeHighlighted);

  // Add custom styles to each post with video
  performHighlighting(toBeHighlighted);
}

/**
 * Perform repaint of highlighted elements on a page.
 *
 * @param {NodeList} toBeHighlighted - Reference to webms that should be highlighted.
 */
function performHighlighting(toBeHighlighted) {
  if (typeof toBeHighlighted !== "undefined" && toBeHighlighted.length > 0) {
    for (i = 0; i < toBeHighlighted.length; i++) {
      toBeHighlighted[i].onmouseover = function () {
        this.style.opacity = "0.7";
      };
      toBeHighlighted[i].onmouseout = function () {
        this.style.opacity = "1.0";
      };
      toBeHighlighted[i].parentElement.style.cssText = "padding-left: 2px; border-left: 6px solid deeppink;";
      toBeHighlighted[i].style.cssText = "color: deeppink !important; font-weight: bold !important; font-size: 16px !important;";
    }
  }
}

/**
 * Filters out every post that does not have video attached.
 *
 * @param {NodeList} withAttachment - Well, those are posts that have attachment in it.
 * @param {NodeList} toBeHighlighted - Reference to webms that should be highlighted.
 */
function filterOutNonVideoPosts(withAttachment, toBeHighlighted) {
  for (i = 0; i < withAttachment.length; i++) {
    if (withAttachment[i].title.endsWith(".webm") || withAttachment[i].title.endsWith(".mp4")) {
      toBeHighlighted.push(withAttachment[i]);
    }
  }
}

// Call method for the first time, so we have someting when we open page
parseVideoTitles();

// Select the node that will be observed for mutations (middle content div)
// since there is no ID, we use class to identify middle div's body.
var targetNode = document.getElementsByClassName('cntnt__right')[0];

// Options for the observer (which mutations to observe)
var config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
var callback = function (mutationsList, observer) {
  for (var mutation of mutationsList) {
    if (mutation.type == 'childList') {
      parseVideoTitles();
    }
  }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
