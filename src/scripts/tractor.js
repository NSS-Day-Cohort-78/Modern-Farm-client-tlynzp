import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

const asparagus = createAsparagus()
const corn = createCorn()
const potato = createPotato()
const soybean = createSoybean()
const sunflower = createSunflower()
const wheat = createWheat()

// In this module, define and export a plantSeeds function.
// The function must accept the year's planting plan as input (i.e. it must define a parameter)(from plan.js).
//

// The plan is an array. It contains 3 arrays representing the rows in the field to be plants. 
// Figure out how to iterate both the parent array and the child arrays.
//

// As you iterate the row of food types to be planted, invoke the corresponding factory function (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
// Take that seed and add it to the array of plants in the field module.
// 


export const plantSeeds = (yearlyPlan) => {
    yearlyPlan.forEach(row => {
        row.forEach((plant) => {
            if (plant === "Asparagus") {
                addPlant(asparagus);
            }
            if (plant === "Potato") {
                addPlant(potato);
            }
            if (plant === "Soybean") {
                addPlant(soybean);
            }
            if (plant === "Sunflower") {
                addPlant(sunflower);
            }
            if (plant === "Wheat") {
                addPlant(wheat);
            }
            if (plant === "Corn") {
                // Array.isArray(value)
                for (const cornObject of corn) {
                    addPlant(cornObject)
                }
            }
        })
    })

}
// plantSeeds needs yearlyPlan and creates array
// addPlant needs seed object and pushes to array