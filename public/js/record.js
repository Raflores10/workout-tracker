document.querySelector(".home").addEventListener("click", (e)=> {
    e.preventDefault();

    location.href="/homepage";
})

document.querySelector(".logout").addEventListener("click", async (e)=> {
    e.preventDefault();

    const logout = await fetch("/logout");

    location.href="/login";
})