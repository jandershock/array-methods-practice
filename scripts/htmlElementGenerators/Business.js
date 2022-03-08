export const GenerateBusiness = (obj) => {
    return `
    <h2>${obj.companyName}</h2>
    <p>${obj.addressFullStreet}</p>
    <p>${obj.addressCity}, ${obj.addressStateCode} ${obj.addressZipCode}</p>
    <hr>
    `
}