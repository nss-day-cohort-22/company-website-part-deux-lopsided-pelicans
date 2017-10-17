const storedNavbar = JSON.parse(localStorage.getItem("navbar"))
const navEl = document.getElementById('nav')

navEl.innerHTML = `
<li><a href="/index.html"><img src ="${storedNavbar[0].location}"</a></li>
`

for (let i = 1; i < storedNavbar.length; i++) {
    let currentNavEl = storedNavbar[i];
    navEl.innerHTML += `
    <li><a href="${currentNavEl.location}">${currentNavEl.name}</a></li> 
    `    
}
console.log(storedNavbar)