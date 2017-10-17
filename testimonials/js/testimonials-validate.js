function checkForBlank() {
    // select the 3 form entry fields and get value
    let checkName = document.forms["submission-form"]["fullname"].value;
    let checkMail = document.forms["submission-form"]["email"].value;
    let checkDescrip = document.forms["submission-form"]["description"].value;

    if (checkName == "" || checkMail == "" || checkDescrip =="") {
        alert("Please fill all fields before submit");
        return false;
    }
}