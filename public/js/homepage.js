document.querySelector(".record").addEventListener("click", (e)=> {
    e.preventDefault();

    location.href="/record"
})

document.querySelector(".logout").addEventListener("click", async (e)=> {
    e.preventDefault();

    const logout = await fetch("/logout");

    location.href="/login"
})