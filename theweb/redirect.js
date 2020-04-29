const pages = [
  "ahhh",
  "colors",
  "dissolve",
  "keyboard",
  "pointer",
  "portal"
]

/**
 * returns GET data associated with specified param ("" on failure)
 * 
 * @param  {String} p GET data key
 * @return {String}   GET data value, or ""
 */
function parseGetData(param) {
  let result = "",
      tmp = [];
  location.search
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === param) {
          result = decodeURIComponent(tmp[1]);
        }
      });
  return result;
}

/**
 * redirects to random page not in h (history) url param, 
 * and updates history with given page p 
 * (pages should call this with their name as p)
 * 
 * @param  {string} p page calling function which should be added to history
 */
function redirect(p) {
  let history = parseGetData("h");
  if (history == null || history == "") {
    for (let i = 0; i < pages.length; i++) {
      history += "0";
    }
  }

  // update history to include page calling redirect()
  if (p != null && typeof(p) === "string" && p != "") {
    let index = pages.indexOf(p);
    history = history.substring(0, index) + "1" + history.substring(index + 1, pages.length);
  }

  // determine which pages have yet to be accessed
  let pagesLeft = [];
  for (let i = 0; i < pages.length; i++) {
    if (history.charAt(i) === "0") {
      pagesLeft.push(i);
    }
  }

  // if all pages have been accessed, we reset history to all "0"'s 
  // and pagesLeft to include everything, such that we can then access any page
  if (pagesLeft.length === 0) {
    history = "";
    for (let i = 0; i < pages.length; i++) {
      history += "0";

      // if there is a valid p don't add it to pagesLeft so we dont get taken back there immediately
      if (((p != null && typeof(p) === "string" && p != "")) && (pages.indexOf(p) === i)) {
        continue;
      }

      pagesLeft.push(i);
    }
  }

  // index of page to redirect to
  let index = Math.floor(Math.random() * pagesLeft.length);

  // redirect
  window.location.href = "/theweb/" + pages[pagesLeft[index]] + "?h=" + history;

}

