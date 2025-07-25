// Define and export a Catalog function.
// The Catalog function should accept the harvested food array as input.
// The Catalog function should iterate the array of food objects.
// As you iterate the array, the <main> element should have its inner HTML appended with an HTML representation of a food item. Use the following example for each food item. The example has Corn hard-coded. Yours should not. It should output the name property of the current food object.

export const catalog = (harvestedArray) => {
    let harvestHTMLString = ''
    let plantId = 1
    const sortedHarvestArray = [...harvestedArray].sort((a, b) => a.type.localeCompare(b.type))
    for (const plant of sortedHarvestArray) {
        harvestHTMLString += `<section class="plant" data-id:${plantId}>${plant.icon}</section>`
        plantId++
    }
    return harvestHTMLString
}