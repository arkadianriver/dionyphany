/**
 * header behavior
 */

let oldScrollY = window.scrollY;
const hdr = document.querySelector("header");

window.onscroll = (event) => {
  if (oldScrollY < window.scrollY) {
    hdr.className = "tuckedaway";
  } else {
    hdr.className = "";
  }
  oldScrollY = window.scrollY;
};
