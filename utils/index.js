
/**
 * Perform repaint of highlighted elements on a page.
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