document.querySelector("#signup-form").addEventListener("submit", async (e)=> {
    e.preventDefault();
    
    const email = document.querySelector("#email");
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    
    if (!email.value || !username.value || !password.value){
        return window.alert("Please enter a value for all fields!");
    }

    const newUser = {
        email: email.value,
        username: username.value,
        password: password.value
    };

    const userFetch = await fetch("/signup", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (userFetch.ok){
        location.href="/homepage"
    } else{
        window.alert("Oops!");
    }
})

document.querySelector(".login").addEventListener("click", (e)=> {
    e.preventDefault();

    location.href="/login"
})