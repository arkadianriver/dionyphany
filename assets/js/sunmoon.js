/**
 * darkmode behavior
 * hat tip https://sunnote.xyz/tutorials/dark-mode-tips-hugo/
 */

let lightModeState = false;
const useLight = window.matchMedia("(prefers-color-scheme: light)");

function toggleLightMode(state) {
	document.documentElement.classList.toggle("lightmode", state);
	document.documentElement.classList.toggle("darkmode", !state);
	lightModeState = state;
}

function setLightModeLocalStorage(state) {
  localStorage.setItem("dionyphanyLightMode", state);
}

toggleLightMode(localStorage.getItem("dionyphanyLightMode") == "true");

useLight.addEventListener("change", (event) => {
	toggleLightMode(event.matches);
});

// entry point from sun/moon button click
function setColorMode() {
	lightModeState = !lightModeState;	
	toggleLightMode(lightModeState);
	setLightModeLocalStorage(lightModeState);
}
