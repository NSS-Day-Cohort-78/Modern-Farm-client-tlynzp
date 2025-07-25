// Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field. Do not export the array.

// Define and export a function named addPlant
// The addPlant function must accept a seed object as input. The function will add the seed to the field array. (array.push())

// Define and export a function named usePlants that returns a copy of the array of plants. (structuredClone())

// Be aware that when planting corn via the addPlant function, an array of objects will be provided instead of a single object like all the other type of seeds. In this case, you need to iterate the array and add each object individually. Investigate the Array.isArray method to check if corn got passed in, or one of the others.

field[]

cornObject = createCorn()

// Populate field array with the correct seeds from yearlyPlan
// Uses addPlant
const plantSeeds(yearlyPlan) {
    for (const array of yearlyPlan) {
        if (array.includes("corn")) {
            field.push(cornObject)
        }
        if (array.includes("sunflower")) {
            field.push(sunflowerObject)
        }
    }
}

// Used inside plantSeeds
const addPlant(seed) {
    field.push(seed)
}

// Used after field is generated from plantSeeds
const usePlant() => {
    foodArray = structuredClone(field);
    return foodArray
}

