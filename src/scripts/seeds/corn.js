// Define and export a function for creating a seed named createCorn (using arrow functions)

// The seed contains the following properties:
// type
// height
// output

// This function will instead return an array of two identical objects in it. For some reason. Reason TBD

export const createCorn = () => {
    const cornArray = [
        {
            type: `Corn`,
            height: 180,
            output: 6
        },
        {
            type: `Corn`,
            height: 180,
            output: 6
        },
    ]

    return cornArray
}