// testimonial entry objects for database - holding image links and any metadata thats going to be used
const testimonial1 = {
    "caption":"caption 1", 
    "image":"./images/img1.jpg"
}
const testimonial2 = {
    "caption":"caption 2", 
    "image":"./images/img2.jpg"
}
const testimonial3 = {
    "caption":"caption 3", 
    "image":"./images/img3.jpg"
};
const testimonial4 = {
    "caption":"caption 4", 
    "image":"./images/img4.jpg"
}

const testimonialDatabase = [] // Create array for testimonial object database
// push all entries into history database
testimonialDatabase.push(testimonial1) 
testimonialDatabase.push(testimonial2)
testimonialDatabase.push(testimonial3)
testimonialDatabase.push(testimonial4)

// place testimonialDatabase insto local storage
// place homeInventory into local storage
const testimonialDatabaseString = JSON.stringify(testimonialDatabase)
localStorage.setItem("testimonialDatabase", testimonialDatabaseString);