const homeLink = document.createElement("a");
homeLink.setAttribute("href", "#");
homeLink.setAttribute("class", "home");
homeLink.textContent = "Home";

const logoutLink = document.createElement("a");
logoutLink.setAttribute("href", "#");
logoutLink.setAttribute("class", "logout");
logoutLink.textContent = "Logout";

document.querySelector(".nav-links").appendChild(homeLink);
document.querySelector(".nav-links").appendChild(logoutLink);

document.querySelector(".home").addEventListener("click", async (e)=> {
    e.preventDefault();

    location.href="/homepage"
})

document.querySelector(".logout").addEventListener("click", async (e)=> {
    e.preventDefault();

    const logout = await fetch("/logout");

    location.href="/login"
})