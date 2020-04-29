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

function redirect() {
  let history = parseGetData("h");
  if (history == null || history == "") {
    for (let i = 0; i < pages.length; i++) {
      history += "0";
    }
  }
  let pagesLeft = [];
  //console.log(history);

  // determine which pages hav yet to be accessed
  for (let i = 0; i < pages.length; i++) {
    if (history.charAt(i) === "0") {
      pagesLeft.push(i);
    }
  }
  //console.log(pagesLeft);

  // if all pages have been accessed, we reset history to all "0"'s 
  // and pagesLeft to include everything, such that we can then access any page
  if (pagesLeft.length === 0) {
    history = "";
    for (let i = 0; i < pages.length; i++) {
      history += "0";
      pagesLeft.push(i);
    }
  }
  //console.log("reseting! history: " + history + ", pagesLeft: " + pagesLeft);

  // index of page to redirect to
  let index = Math.floor(Math.random() * pagesLeft.length);
  //console.log("index: " + index + " --> " + pagesLeft[index]);

  // create new history string
  newHistory = history.substring(0, pagesLeft[index]) + "1" + history.substring(pagesLeft[index]+1, pages.length);
  //console.log(newHistory);

  // redirect
  window.location.href = "/theweb/" + pages[pagesLeft[index]] + "?h=" + newHistory;
}

