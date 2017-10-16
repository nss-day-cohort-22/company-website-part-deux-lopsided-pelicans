// get database from local storage
const storedPackages = JSON.parse(localStorage.getItem("packages"));
const packagesEl = document.getElementById("mainSection");

//loop through nav array
for (let i = 0; i < storedPackages.length; i++) {
    let currentPackage = storedPackages[i];

    navEl.innerHTML += `
    <li><a href="${currentPackage.__}">${currentPackage.__}</a></li>
    `
    
}