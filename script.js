// Get User input eliment
let userDate = document.getElementById("date");
// Disable future date selection
userDate.max = new Date().toISOString().split("T")[0];

function caculateAge() {
  // get user output element
  let userAge = document.getElementById("age");
  userAge.innerHTML = "";

  let birthDate = new Date(userDate.value);

  if (birthDate == "Invalid Date") {
    let userError = document.getElementById("error");
    // To show Error message
    userError.innerHTML = "Date is invalid";
  }
  else {
    let userError = document.getElementById("error");
    // To Remove Error message
    userError.innerHTML = " ";

    // Separating user's birthdate
    let userDay = birthDate.getDate();
    let userMonth = birthDate.getMonth() + 1;
    let userYear = birthDate.getFullYear();

    // get Current date
    let todayDate = new Date();

    // Seprating today's date
    let todayDay = todayDate.getDate();
    let todayMonth = todayDate.getMonth() + 1;
    let todayYear = todayDate.getFullYear();

    // calculation to get the age
    let ageDay, ageMonth, ageYear;

    // Get year 
    ageYear = todayYear - userYear;

    // Get Month
    if (todayMonth >= userMonth) {
      ageMonth = todayMonth - userMonth;
    } else {
      ageYear--;
      ageMonth = 12 + todayMonth - userMonth;
    }


    // get day
    if (todayDay >= userDay) {
      ageDay = todayDay - userDate;
    } else {
      ageMonth--;
      ageDay = getDaysInMonth(userYear, userMonth) + todayDay - userDay
    }
    if (ageMonth < 0) {
      ageMonth = 11;
      ageYear--;
    }
    // To show output 
    userAge.innerHTML = `Your age is: <span>${ageYear}</span> Years <span>${ageMonth}</span> Months <span>${ageDay}</span> Day`
  }
}
// To Get number of days in user's birthday month
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}