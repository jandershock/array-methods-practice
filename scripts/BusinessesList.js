export const GenerateList = (objArrary, elementLocation, listTitle, ListElementGenerator) => {
    // Get target element location where you want to generate the list
    const el = document.querySelector(elementLocation);

    el.innerHTML += `<h1>${listTitle}</h1>`;
    // Iterate over businesses list
    objArrary.forEach(element => {
        // Call function for generating individual business html and pass in individual elements of businesses array
        el.innerHTML += ListElementGenerator(element);
    });
}