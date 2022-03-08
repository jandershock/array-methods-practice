import { GenerateList } from "./BusinessesList.js";
import { GetBusinesses } from "./data/Businesses.js";
import { GenerateBusiness } from "./htmlElementGenerators/Business.js";
import { GeneratePurchasingAgent } from "./htmlElementGenerators/PurchasingAgent.js";

const businessesArray = GetBusinesses();

// Show all businesses
GenerateList(
    businessesArray,
    ".target",
    "Active Businesses",
    GenerateBusiness
);

// New York Filtering
GenerateList(
    businessesArray.filter(element => element.addressStateCode === 'NY'),
    ".business-list--newYork",
    "New York Businesses",
    GenerateBusiness
);

// Manufacturing Filtering
GenerateList(
    businessesArray.filter(element => element.companyIndustry === 'Manufacturing'),
    ".businessList--manufacturing",
    "Manufacturing Businesses",
    GenerateBusiness
);

// Purchasing Agents
GenerateList(
    businessesArray.map((element) => {
        return {
            "fullName": `${element.purchasingAgent.nameFirst} ${element.purchasingAgent.nameLast}`,
            "company": `${element.companyName}`,
            "phoneNumber": `${element.phoneWork}`
        }
    }),
    ".agents",
    "Purchasing Agents",
    GeneratePurchasingAgent
)


// Show all businesses
GenerateList(
    businessesArray,
    ".foundCompanies",
    "Active Businesses",
    GenerateBusiness
);
// Place an article element in your HTML with the class below
const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */

            const foundBusiness = businessesArray.find((element) => {
                return element.companyName.includes(keyPressEvent.target.value);
            })// implement .find() method here
            console.log(keyPressEvent.target.value);

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });