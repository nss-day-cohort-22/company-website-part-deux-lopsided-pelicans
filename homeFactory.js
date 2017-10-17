const logo = {
    'name' : 'Logo',
    'location' : '/img/ambulanceLogo.png'
}
const home = {
    'name' : 'Home',    
    'location' : '/index.html'
}

const services = {
    'name' : 'Subscripton Packages',
    'location' : '/services/services.html'
}

const testimonials = {
    'name' : 'Testimonials',
    'location' : '/testimonials/testimonials.html'
}

const custom = {
    'name' : 'Services',
    'location' : '/custom/custom.html'
}

let navbar = []
navbar.push(logo, home, services, testimonials, custom)

const navbarString = JSON.stringify(navbar)

localStorage.setItem("navbar", navbarString)