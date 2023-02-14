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
      bench_max: previousMaxes[previousMaxes.length - 1].bench_max,
      deadlift_max: previousMaxes[previousMaxes.length - 1].deadlift_max,
      squat_max: oneRepMax
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