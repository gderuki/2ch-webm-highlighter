window.setInterval(function () {
  // get all posts with attachments
  var postsWithAttachment = document.querySelectorAll('[id^=title-]');

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


}, 5000);