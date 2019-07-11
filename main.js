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
