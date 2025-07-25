// Import and invoke the createPlan function and store the value as yearlyPlan.
// import { createPlan } from "./plan.js";
import { createPlan } from "./plan.js"
// import { addPlant } from "./field.js"
// import { createAsparagus } from "./seeds/asparagus.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { plantSeeds } from "./tractor.js"
import { catalog } from "./catalog.js"


export const yearlyPlan = createPlan()

// Import and invoke plantSeeds() using yearlyPlan as an argument
plantSeeds(yearlyPlan)
// Import and invoke usePlant() to return a copy of the array that plantSeeds() created and store in a variable named plantedSeeds
const plantedSeeds = usePlants()
// Import and invoke harvestPlants(plantedSeeds) to generate a new array and store in a variable named harvestedPlants
const harvestedPlants = harvestPlants(plantedSeeds)
// Import and invoke the catalog(), passing the array of food as an argument, to generate HTML in a variable named plantsHTML
const harvestedHTMLForDOM = catalog(harvestedPlants)
// Target the dom using plantsHTML.innerHTML (whatever the hell it's called)
const containerSelected = document.querySelector(".container")
containerSelected.innerHTML = harvestedHTMLForDOM
