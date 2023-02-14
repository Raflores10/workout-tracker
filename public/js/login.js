document.querySelector("#login-form").addEventListener("submit", async (e)=> {
    e.preventDefault();

    const username = document.querySelector("#username");
    const password = document.querySelector("#password");

    if(!username.value || !password.value){
        return window.alert("Please enter a value for both fields!");
    }

    const user = {
        username: username.value,
        password: password.value
    }

    const fetchUser = await fetch("/login", {
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

document.querySelector(".signup").addEventListener("click", (e)=> {
    e.preventDefault();

    location.href="/signup";
})