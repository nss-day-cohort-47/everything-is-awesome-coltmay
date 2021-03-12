console.log("hello beautiful")
import { loadLegos, useLegos } from './legos/LegoData.js'
import { makeLegoList } from './legos/LegoList.js';

const navElement = document.querySelector("nav");

navElement.addEventListener("click", (event) => {
	if (event.target.id === "showRed") {
		filterLegos("Red")
	} else if (event.target.id === "showGreen") {
		filterLegos("Green")
	} else if (event.target.id === "showAll") {
		makeLegoList(useLegos())
	}
})

// Function that drives searchbar
const startSearch = () => {
	const searchInput = document.getElementById("searchbar").value
	console.log(searchInput);
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoId === searchInput) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

// Event listener that listens for a click on the submit button
navElement.addEventListener("click", event => {
	if (event.target.id === "submit") {
		startSearch();
	}
})

// Event listenr that listens for a keydown on enter
navElement.addEventListener("keypress", function (e) {
	if (e.key === 'Enter') {
		startSearch();
	}
})

// Event listener that captures a change in the material selector
navElement.addEventListener("change", (event => {
	if (event.target.id === "materialSelector") {
		const material = event.target.value;
		filterlegoMaterial(material);
	}
}))

// Event listener that captures a seach in the searchbox

const filterLegos = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.LegoName.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

// New filter that looks for the value of the Material property in the object
const filterlegoMaterial = (whatFilter) => {
	const filterArray = useLegos().filter(singleLego => {
		if (singleLego.Material.includes(whatFilter)) {
			return singleLego;
		}
	})
	makeLegoList(filterArray);
}

const startEIA = () => {
	loadLegos()
		.then(legoArray => {
			makeLegoList(legoArray)
		})
}

startEIA();