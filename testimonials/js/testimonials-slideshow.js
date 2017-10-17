//initialize slideIndex and set to 0
var slideIndex = 0;
//call the showSlides fuction   
showSlides();

function showSlides() {
    //grab the DOM element with the class "mySlides" and place it into variable called slides
    let slides = document.getElementsByClassName("mySlides");
    //initialize loop and set to the how many DOM elements with "mySlides"
    for (let i = 0; i < slides.length; i++) {
        //cycle through and use .style method to set to none to hide all of them
        slides[i].style.display = "none"; 
    }
    slideIndex++; //increase the slide index variable everytime the function is called
    
    if (slideIndex > slides.length) //If you have made it through the total number of slides
     {slideIndex = 1} //Set the slide index back to 1
    slides[slideIndex-1].style.display = "block"; //update the style of the current slide to show
    setTimeout(showSlides, 9000); // call the function every 9 seconds
} 