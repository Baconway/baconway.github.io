function catCollapse(params) {
  const catPopup = document.getElementsByClassName("popup")[0];

  if (catPopup.lastElementChild.style.maxWidth != "0px") {
    catPopup.lastElementChild.style.maxWidth = "0px";
    catPopup.style.maxHeight = "26.4px";
  } else {
    catPopup.lastElementChild.style.maxWidth = "110px";
    catPopup.style.maxHeight = "fit-content";
  }
}
