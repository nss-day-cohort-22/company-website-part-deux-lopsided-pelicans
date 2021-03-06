// get database from local storage
const storedPackages = JSON.parse(localStorage.getItem("packages"));

// finding the html element to add data to below. 
const packagesElement = document.getElementById("mainSection");

console.log(storedPackages);

let list = new Array();
let pageList = new Array();
let currentPage = 1;
let numberPerPage = 4;
let numberOfPages = 5;
const pageNumber = 5;

let listPushed = [];

function makeList() {
for (let i = 0; i < storedPackages.length; i++) {
    
    let currentPackage = storedPackages[i];


    // Nested for loop to go deeper into the database to find objects nested  within the array nested in the previous loop's currentPackage
    // NOTE: currentPackage.services.length was not used because i only want to display the first 3 of all the services.
    for (let j = 0; j < currentPackage.services.length; j++)  {
    
        let currentService = currentPackage.services[j];
        
        
        //store the html text to be pushed into the DOM  in a variable which will be used in the inner HTML later
        listPushed =
            `<div onclick='toastIt()' class='serviceButton'>
                <h3 class='serviceName'>${currentService.name}</h3>
                <h4 class='serviceTier'>${currentService.packageTier}</h4>
                <ul>
                    <li class='price'>${currentService.price}</li>
                    <li id='description'>${currentService.description}</li>
                </ul>
            </div>
            `
            //pushes the above text into the array 'list'
            list.push(listPushed);
        }
    }

}


numberOfPages = getNumberOfPages();

function getNumberOfPages() {
return Math.ceil(list.length / numberPerPage);
}

function nextPage() {
currentPage += 1;
loadList();
}

function previousPage() {
currentPage -= 1;
loadList();
}

function changePage(x) {
    currentPage = x;
    loadList();
}

function loadList() {
let begin = ((currentPage - 1) * numberPerPage);
let end = begin + numberPerPage;

pageList = list.slice(begin, end);
drawList();
check();
}

function drawList() {
document.getElementById("list").innerHTML = "";
for (r = 0; r < pageList.length; r++) {
    document.getElementById("list").innerHTML += pageList[r] + "<br/>";
}
}

function check() {
document.getElementById("next").disabled = currentPage === pageNumber ? true : false;
document.getElementById("previous").disabled = currentPage === 1 ? true : false;
document.getElementById("first").disabled = currentPage === 1 ? true : false;
document.getElementById("second").disabled = currentPage === 2 ? true : false;
document.getElementById("third").disabled = currentPage === 3 ? true : false;
document.getElementById("fourth").disabled = currentPage === 4 ? true : false;
document.getElementById("fifth").disabled = currentPage === 5 ? true : false;
}

function load() {
makeList();
loadList();
}

window.onload = load;

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