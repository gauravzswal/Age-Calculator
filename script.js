let input = document.querySelector(".date");
let btn = document.querySelector(".btn");
let output = document.querySelector(".dob");

btn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please enter a date");
    return;
  } else {
    let dob = input.value;
    let date = new Date(dob);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDay = today.getDate();
    let age = currentYear - year;
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
      age--;
    }
    output.innerHTML = `${age}`;
  }
});

