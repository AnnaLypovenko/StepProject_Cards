
import User from './user.js';
import functionList from './function-list.js';
import Valid from './validation-list.js';
import Form from "./form.js";
import Visit from "./visit.js";
import Ajax from "./ajax.js";

const loginForm = new Form(); // создание экземпляра класса Форм
document.getElementById("loginButton").addEventListener("click", function loginFormRender() {
    loginForm.render(document.querySelector("#openModal .modal-form"));
});

function loginSubmitCallback() {
    debugger;
    if(loginForm.validation()) {
        // submit to server (login)
        console.log("valid");
    }
    console.log("invalid");

}
document.querySelector("#openModal .modal-form").addEventListener("submit", loginSubmitCallback);



