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

/**
 * Resume select box
 */

const resumes = document.getElementById('resumes');
resumes.addEventListener('change', function() {
  const selectedOption = this.options[this.selectedIndex];
  const url = selectedOption.getAttribute('data-url');
  if (url) {
      window.open(url, '_blank');
      // Optional: Reset the select box to the default option after opening the link
      this.selectedIndex = 0; 
  }
});

/**
 * Works table tag filtering
 */

htmx.onLoad((content) => {

  // start fresh whenever page is refreshed
  localStorage.setItem('dionyphanyShowRowsWith', "[]");

  // build easy-to-work-with worksData hash, with keys of row ID, and values of tags in the row
  // rather than always walking the DOM
  const worksData = {};
  Array.from(content.querySelectorAll('.works-row')).forEach( (node) => {
    const tagElements = node.querySelectorAll('[data-selector]');
    worksData[node.id] = Array.from(tagElements, (tag) => tag.dataset.selector );
  });
  localStorage.setItem('worksData', JSON.stringify(worksData));

  const tagElements = content.querySelectorAll("[data-selector]");

  tagElements.forEach((tagElement) => {
    tagElement.addEventListener("click", function(e) {
      const worksData = JSON.parse(localStorage.getItem('worksData'));
      let selected = JSON.parse(localStorage.getItem('dionyphanyShowRowsWith'));
      const tag = this.dataset.selector;
      // toggle tag throughout
      if (selected.includes(tag)) {
        selected = selected.filter((val) => val !== tag ); // remove
        document.querySelectorAll(`[data-selector="${tag}"]`).forEach((item) => item.classList.remove('selected'));
      } else {
        selected.push(tag);
        document.querySelectorAll(`[data-selector="${tag}"]`).forEach((item) => item.classList.add('selected'));
      }
      if (selected.length == 0) {
        // show all if empty, bada-bing
        document.querySelectorAll('.works-row').forEach((node) => node.classList.remove('hiderow'));
      } else {
        // Or bada-boom, go through each row in hash to check if it includes all (every) selected tags
        // and show or hide accordingly
        Object.entries(worksData).forEach(([id, tags]) => {
          selected.every((e) => tags.includes(e))
            ? document.getElementById(id).classList.remove('hiderow')
            : document.getElementById(id).classList.add('hiderow');
        });
      }
      // re-save selected state
      localStorage.setItem('dionyphanyShowRowsWith', JSON.stringify(selected));
    });
  });

});
