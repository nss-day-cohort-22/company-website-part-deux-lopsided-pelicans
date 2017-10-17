function clicker() {
    // select the 3 form entry fields and get value
    let checkName = document.forms["submission-form"]["fullname"].value;
    let checkMail = document.forms["submission-form"]["email"].value;
    let checkDescrip = document.forms["submission-form"]["description"].value;

    if (checkName == "" || checkMail == "" || checkDescrip =="") {
        return false;
    }else {
        clickershow();
    }
}
function clickershow() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 5 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    return true;
}