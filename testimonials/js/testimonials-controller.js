// Grab history database from local stoage and place into object called historyEntries
const testimonialEntries = JSON.parse(localStorage.getItem("testimonialDatabase"))

// create placeholder for selected dom element
const selectedElement = document.getElementsByClassName("slideshow-container")[0]

//iterate over every key in the testimonial database to create the slideshow
for (let i = 0; i < testimonialEntries.length; i++) {
    var element = testimonialEntries[i];
    let readout=i+1 //initialize counter for slides to display needs to be value of counter plus one. 

    //select Dom Element and inject HTML
    selectedElement.innerHTML += `

  <div class="mySlides fade">
    <div class="numbertext">${readout} / ${testimonialEntries.length}</div>
    <img src="${element.image}" style="width:100%">
    <div class="text">${element.caption}</div>
  </div>`
}
 
