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

document.querySelector("form").addEventListener("submit", async (e)=> {
  e.preventDefault();

  const weight = document.querySelector(".weight");
  const reps = document.querySelector(".reps");

  if (!weight.value || !reps.value){
    return window.alert("Please enter a value for both fields!");
  }

  const oneRepMax = Math.round((100 * weight.value) / (101.3 - (2.67123 * reps.value)));

  const previousMaxData = await fetch("/api/workouts/1");
  const previousMaxes = await previousMaxData.json();

  const newWorkout = {
    bench_max: oneRepMax,
    deadlift_max: previousMaxes[previousMaxes.length - 1].deadlift_max,
    squat_max: previousMaxes[previousMaxes.length - 1].squat_max
  }

  const postNewMaxes = await fetch("/api/workouts", {
    method: "POST",
    body: JSON.stringify(newWorkout),
    headers: {
      "Content-Type":"application/json"
    }
  });

  if (postNewMaxes.ok){
    location.href="/homepage";
  } else {
    window.alert("Oops!");
  }
  
});

document.querySelector(".home").addEventListener("click", async (e)=> {
  e.preventDefault();

  location.href="/homepage"
})

document.querySelector(".logout").addEventListener("click", async (e)=> {
  e.preventDefault();

  const logout = await fetch("/logout");

  location.href="/login"
})