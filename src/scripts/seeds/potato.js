// Define and export a function for creating a seed named createPotato (using arrow functions)

// The seed contains the following properties:
// type
// height
// output

export const createPotato = () => {
    const potatoObject = {
        type: `Potato`,
        height: 32,
        output: 2,
        icon: "🥔"
    }

    return potatoObject
}