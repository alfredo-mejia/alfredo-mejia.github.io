// Used to capitalize any strings for visual purposes
export const capitalize = (str, s2) => {

    console.log(str)
    console.log(s2)

    // If the string has more than one word, split the words into an array
    const words = str.split(" ");

    // For each word in the array, capitalize each first letter
    words.forEach((word, index) => {
        words[index] = capitalizeFirstLetter(word);
    });

    // Return the array back joined with spaces as a string
    return words.join(" ");
}


// Used to capitalize a single wod
const capitalizeFirstLetter = (str) => {
    if (str === str.toUpperCase())
        return str

    // Get the first character and make it uppercase while the rest lower case
    return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
}