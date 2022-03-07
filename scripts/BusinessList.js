import { businesses } from "./BusinessData.js";

const businessNameElement = (obj) => {
  const businessNameTarget = document.querySelector(".active_companies");
  businessNameTarget.innerHTML += `<div class = "company_name_cards"><h3>${obj.companyName}</h3>
  <p>${obj.addressFullStreet}</p>
 <p>${obj.addressCity}, ${obj.addressStateCode} ${obj.addressZipCode} </p>
 </div>`;
};

export const businessNameFunction = businesses.filter((business) => {
  if (
    business.addressStateCode !== "NY" &&
    business.companyIndustry !== "Manufacturing"
  ) {
    businessNameElement(business);
  }
});

const newyorkNameElement = (obj) => {
  const newyorkNameTarget = document.querySelector(".new_york_companies");
  newyorkNameTarget.innerHTML += `<div class = "company_name_cards"><h3>${obj.companyName}</h3>
  <p>${obj.addressFullStreet}</p>
 <p>${obj.addressCity}, ${obj.addressStateCode} ${obj.addressZipCode} </p>
 </div>`;
};

export const newyorkNameFunction = businesses.filter((business) => {
  if (business.addressStateCode === "NY") {
    newyorkNameElement(business);
  }
});

const manufacturingNameElement = (obj) => {
  const manufacturingNameTarget = document.querySelector(
    ".manufacturing_companies"
  );
  manufacturingNameTarget.innerHTML += `<div class = "company_name_cards"><h3>${obj.companyName}</h3>
  <p>${obj.addressFullStreet}</p>
  <p>${obj.addressCity}, ${obj.addressStateCode} ${obj.addressZipCode} </p>
  </div>`;
};

export const manufacturingNameFunction = businesses.filter((business) => {
  if (business.companyIndustry === "Manufacturing") {
    manufacturingNameElement(business);
  }
});

const companySearchResultArticle = document.querySelector(".found_companies");

document
  .querySelector("#company_search")
  .addEventListener("keypress", (keyPressEvent) => {
    if (keyPressEvent.charCode === 13) {
      console.log(keyPressEvent.target.value);
      const foundBusiness = businesses.find((business) =>
        business.companyName
          .toLowerCase()
          .includes(keyPressEvent.target.value.toLowerCase())
      );
      if (foundBusiness) {
        companySearchResultArticle.innerHTML = `
          <h3>
                ${foundBusiness.companyName}
                </h3>
                <p>
                ${foundBusiness.addressFullStreet}
                </p>
                <p>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </p>
            `;
      } else {
        companySearchResultArticle.innerHTML = `<h3> Business Not Found </h3>`;
      }
    }
  });
