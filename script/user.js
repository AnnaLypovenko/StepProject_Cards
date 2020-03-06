class User {
    constructor({email, pass}) {
        this.email = email;
        this.pass = pass;
        this.authorized = false;
        this.token = null;
    }
    static loginUrl = "http://cards.danit.com.ua/login";

    authorize() {
        fetch(User.loginUrl, {
            method: "POST",
            body: JSON.stringify({
                email: this.email,
                password: this.pass,
    })
    })

    .then(response => response.json())
            .then(response => {
                if (response.status === "Success") {
                    this.authorized = true;
                    this.token = response.token;
                    localStorage.setItem("token", this.token)
                } else alert("неверный логин или пароль")
            })
    }

}
const config = {
    email: "timur_khistev@ukr.net",
    pass: "danit2020"
};
const user = new User(config);
export default User;
