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

// Event listener that captures a change in the material selector
navElement.addEventListener("change", (event => {
	if (event.target.id === "materialSelector") {
		const material = event.target.value;
		filterlegoMaterial(material);
	}
}))

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

// ! TEST CODE -------------------------------------------------------------------


// ! -----------------------------------------------------------------------------
// ? CONSOLE LOGS FOR DEBUGGING --------------------------------------------------


// ? -----------------------------------------------------------------------------
// TODO CHECK LIST ---------------------------------------------------------------
//// - [X] Change the functionality of the `Show Blue Legos` button to show red Legos.
////  	   Be sure to update your code to reflect this change.
//// - [X] Add a button that when clicked will display green Legos.
//// - [X] If a brick has notes, include them on the brick detail.
////   - [X] Add a `helper function` and invoke it to capitalize the brick name.
//// - [X] Add dropdown to the nav area to show specific bricks by material.
//   - [ ] Add search box that will accept a `LegoId` and display only that Lego.
//   - [ ] If the `LegoId` is not valid, return "ID not valid".
//   - [ ] Use enter key on search box.
// TODO --------------------------------------------------------------------------
