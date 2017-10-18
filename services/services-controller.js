// let packagesString = JSON.stringify(packages);
// localStorage.setItem("packages", packagesString);

let packagesDatabase = JSON.parse(localStorage.getItem("packages")) //JSON.parse is for storing the string in local storage
const packagesElement = document.getElementById("packages-main")

for (let i = 0; i < packagesString.length; i += 1) { //for loop duh
    const currentpackages = packages[i];
    let domString = ""

    // here we go with the DOM
    domString += ` 
<section class="packages-main"> 

<div><img class="datPic" src="${packages[i].img}"></div> 

<article class="packagesContainer">

    <div class="tier">${currentpackages.name}</div>
    <ul>
    <li class="ultimate">${packages[i].services[0].name}</li>
    <li class="deluxe">${packages[i].services[1].name}</li>
    <li class="basic">${packages[i].services[2].name}</li>
    
    </ul>   
    <select>
    `

    for (let key in packages[i].price) {

        // using Sub key and referencing the prices
        domString += `
        <option>${key}-${packages[i].price[key]}</option> `

    }
    // domString is so that Chrome isn't ignoring my closing select tag
    domString += ` 
        </select>
        <br>
        <button type="button" onclick="clicker(); document.getElementById('sound1').play();" class="button">Purchase Now</button>
        <audio id="sound1" src="peel-out.mp3" preload="auto"></audio>
</article>
    <div><img class="ambo" src="${packages[i].vroom}"></div>

</section>

`
    packagesElement.innerHTML += domString
}

// tire SFX onclick


// vroom function?

function myMove() {
    var elem = document.getElementsByClassName("ambo")[0]; 
      
    var pos = 0;
    var id = setInterval(frame, 5);
    
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        
        elem.style.left = pos + 'px'; 
      }
    }
  }

function clicker() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")
    // Add the "show" class to DIV
    x.className = "show";

    // After 5 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    
    myMove()
}
 


