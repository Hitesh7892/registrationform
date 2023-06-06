const form = document.querySelector(".form");
const btn = document.querySelector(".button");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const username = document.querySelector(".username");
const contact = document.querySelector(".contact");
const college = document.querySelector(".college");

const address = document.querySelector(".address");

const nationality = document.querySelector(".nationality");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    check();
    result();
    e.target.reset();
});

function result() {
    let newEl = document.createElement("div");
    document.body.appendChild(newEl);

    let newPara1 = document.createElement("p");
    let newPara2 = document.createElement("p");
    let newPara3 = document.createElement("p");
    let newPara4 = document.createElement("p");
    let newPara5 = document.createElement("p");
    let newPara6 = document.createElement("p");
    let newPara7 = document.createElement("p");
    let newPara8 = document.createElement("p");
    newPara1.className = "para";
    newPara2.className = "para";
    newPara3.className = "para";
    newPara4.className = "para";
    newPara5.className = "para";
    newPara6.className = "para";
    newPara7.className = "para";
    newPara8.className = "para";

    newEl.appendChild(newPara1);
    newEl.appendChild(newPara2);
    newEl.appendChild(newPara3);
    newEl.appendChild(newPara4);
    newEl.appendChild(newPara5);
    newEl.appendChild(newPara6);
    newEl.appendChild(newPara7);
    newEl.appendChild(newPara8);

    newPara1.innerHTML = firstName.value;
    newPara2.innerText = lastName.value;
    newPara3.innerHTML = email.value;
    newPara4.innerHTML = username.value;
    newPara5.innerHTML = contact.value;
    newPara6.innerHTML = address.value;
    newPara7.innerHTML = college.value;
    newPara8.innerHTML = "----------------------------------------------";
}

function check() {
    const password = document.queryCommandIndeterm(".password");
    const address = document.queryCommandIndeterm(".address");
    const nationality = document.queryCommandIndeterm(".nationality");
    if (firstName.value == 0) {
        window.alert("Enter your First Name");
        firstName.focus();
        return false;
    }
    if (lastName.value == 0) {
        window.alert("Enter your Last Name");
        lastName.focus();
        return false;
    }
    if (email.value == 0) {
        window.alert("Enter your Email");
        email.focus();

        return false;
    }
    if (username.value == 0) {
        window.alert("Enter your Username");
        username.focus();

        return false;
    }

    if (password.value == 0) {
        window.alert("Enter your Password");
        password.focus();

        return false;
    }
    if (contact.value == 0) {
        window.alert("Enter your Contact Details");
        contact.focus();

        return false;
    }
    if (address.value == 0) {
        window.alert("Enter your Address");
        address.focus();
        return false;
    }
    if (college.value == 0) {
        window.alert("Enter your College Name");
        college.focus();

        return false;
    }

    if (nationality.value == 0) {
        window.alert("Enter your Nationality");
        nationality.focus();

        return false;
    }
    return true;
}