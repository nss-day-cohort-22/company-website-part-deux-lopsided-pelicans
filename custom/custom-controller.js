// get database from local storage
const storedPackages = JSON.parse(localStorage.getItem("packages"));

// finding the html element to add data to below. 
const packagesElement = document.getElementById("mainSection");


// Adding h2 element (loops through the outtermost container array to the first layer of nested objects)
for (let i = 0; i < storedPackages.length; i++) {
      
    let currentPackage = storedPackages[i];

    packagesElement.innerHTML +=
        `<h2>${currentPackage.name}</h2>`

    // Nested for loop to go deeper into the database to find objects nested  within the array nested in the previous loop's currentPackage
    for (let j = 0; j < currentPackage.services.length; j++)  {
    
        let currentService = currentPackage.services[j];

        packagesElement.innerHTML +=
            `<button>
                <h3>${currentService.name}</h3>
                <ul>
                    <li>${currentService.price}</li>
                    <li>${currentService.description}</li>
                </ul>
            </button>
            `
    }

}