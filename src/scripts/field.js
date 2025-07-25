// Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field. Do not export the array.
const field = []

// Define and export a function named addPlant
// The addPlant function must accept a seed object as input. The function will add the seed to the field array. (array.push())
export const addPlant = (seed) => {
    // if (seed.isArray === true) {
    // for (const seedObject of seed) {
    field.push(seed)
    //     }
    // }
    // else field.push(seed)
}

// console.log(addPlant(seed))

// Define and export a function named usePlants that returns a copy of the array of plants. (structuredClone())
export const usePlants = () => structuredClone(field)

// Be aware that when planting corn via the addPlant function, an array of objects will be provided instead of a single object like all the other type of seeds. In this case, you need to iterate the array and add each object individually. Investigate the Array.isArray method to check if corn got passed in, or one of the others.