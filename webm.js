function parseVideoTitles() {
  // get all posts with attachments
  var postsWithAttachment = document.querySelectorAll('[class^=desktop]');
  var webms = [];

  // Filter out anything that isn't video
  for (i = 0; i < postsWithAttachment.length; i++) {
    if (postsWithAttachment[i].title.endsWith(".webm") || postsWithAttachment[i].title.endsWith(".mp4")) {
      webms.push(postsWithAttachment[i]);
    }
  }

  // Add custom styles to each post with video
  if (typeof webms !== "undefined" && webms.length > 0) {
    for (i = 0; i < webms.length; i++) {
      webms[i].onmouseover = function () {
        this.style.opacity = "0.7";
      }
      webms[i].onmouseout = function () {
        this.style.opacity = "1.0";
      }

      webms[i].parentElement.style.cssText = "padding-left: 2px; border-left: 6px solid deeppink;";
      webms[i].style.cssText = "color: deeppink !important; font-weight: bold !important; font-size: 16px !important;";
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
