export default class Form {
    formElement;

    constructor() {

    }

    validation() {
        return true;
    }

    render(root) {
        //this.formElement = el;
        root.innerHTML = "                    <form class=\"modal-form\">\n" +
            "                        <div class=\"email\"><label>Ваш email </label><input type=\"email\"></div>\n" +
            "                        <br>\n" +
            "                        <div class=\"pass\"><label>Ваш пароль </label><input type=\"password\"></div>\n" +
            "                        <br>\n" +
            "                        <button type=\"submit\">Вход</button>\n" +
            "                    </form>";
    }
}
