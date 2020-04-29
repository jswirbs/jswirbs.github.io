const pages = [
  "ahhh",
  "colors",
  "dissolve",
  "keyboard",
  "pointer",
  // "pointer2", this is no longer accessible randomly, must follow pointer, we don't want anyone getting hurt
  "portal"
]

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

function redirect(p) {
  let history = parseGetData("h");

  // SPECIAL CASE: redirect to pointer2
  if (p === "pointer2") {
    if (history == null || history == "") {
      window.location.href = "/theweb/pointer2";
    } else {
      window.location.href = "/theweb/pointer2?h=" + history;
    }
  }

  if (history == null || history == "") {
    for (let i = 0; i < pages.length; i++) {
      history += "0";
    }
  }

  // determine which pages hav yet to be accessed
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
      pagesLeft.push(i);
    }
  }

  // index of page to redirect to
  let index = Math.floor(Math.random() * pagesLeft.length);
  //console.log("index: " + index + " --> " + pagesLeft[index]);

  // create new history string
  newHistory = history.substring(0, pagesLeft[index]) + "1" + history.substring(pagesLeft[index]+1, pages.length);

  // redirect
  window.location.href = "/theweb/" + pages[pagesLeft[index]] + "?h=" + newHistory;
}

