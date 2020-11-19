const loginButton = $(".login-button");

loginButton.click(() => {
    const username = $(".username-input").val();
    const password = $(".password-input").val();

    axios.post("http://localhost:3333/login", { username, password } ).then(res => {
        console.log(res.data);
    })
})