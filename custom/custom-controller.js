// get database from local storage
const storedPackages = JSON.parse(localStorage.getItem("packages"));

// finding the html element to add data to below. 
const packagesElement = document.getElementById("mainSection");


// Adding h2 element (loops through the outtermost container array to the first layer of nested objects)
for (let i = 0; i < storedPackages.length; i++) {
      
    let currentPackage = storedPackages[i];

    packagesElement.innerHTML +=
        `<div class='subSection'>
            <h2>${currentPackage.name}</h2>
        </div>`
    

    // Nested for loop to go deeper into the database to find objects nested  within the array nested in the previous loop's currentPackage
    // NOTE: currentPackage.services.length was not used because i only want to display the first 3 of all the services.
    for (let j = 0; j < 3; j++)  {
    
        let currentService = currentPackage.services[j];

        packagesElement.innerHTML +=
            `<button onclick='toastIt()' class='serviceButton'>
                <h3>${currentService.name}</h3>
                <ul>
                    <li>${currentService.price}</li>
                    <li>${currentService.description}</li>
                </ul>
            </button>
            `
        console.log(packagesElement);
    }

}

//TOASTER onCLick function for each button 
//(??SHOULD JESS AND I USE THE EXACT SAME CODE AND PUT IT IN A SEPERATE TOASTER.JS FILE???)
function toastIt() {
    // Get the snackbar DIV
    let toast = document.getElementById("toaster")

    // Add the "show" class to DIV
    toast.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}