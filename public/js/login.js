document.querySelector("#login-form").addEventListener("submit", async (e)=> {
    e.preventDefault();

    const username = document.querySelector("#username");
    const password = document.querySelector("#password");

    if(!username.value || !password.value){
        window.alert("Please enter a value for both fields!");
    }

    const user = {
        username: username.value,
        password: password.value
    }

    const fetchUser = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type":"application/json"
        }
    });

    if (fetchUser.ok){
        location.href="/homepage";
    } else {
        window.alert("Oops!");
    }
});