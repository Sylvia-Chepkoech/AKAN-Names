//Input = Birthday
//Output = Akan Name(Day of the week)

function birthdayHandler() {
  let button = document.getElementById("submitButton")
}

button.addEventListener("click", function callback(event) {
  let day = parseInt(document.getElementById("day-input").value)
  let month = parseInt(document.getElementById("month-input").value)
  let year = parseInt(document.getElementById("year-input").value)
  let gender = document.getElementById("gender").value
  let finalStatementElement = document.getElementById("finalStatement")

  let minYob = 1900

  //Months
  let months = ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
  "November", "December")
  //Days
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //Akan Names
  let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  let maleAkanNames = ["Kwasi", "Kwadwo", "kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

  //If a day is greater tha 31 or less than 1. Prompt the user.
  If (day) > 31 || < 1) {
    alert("Invalid date.")
    return false
  };
  //Month of February(exception)


  If (month > 12 || < 1) {
    alert("Invalid month.")
    return false
  };

  If (year < 1900) {
    alert("Invalid year.")
    return false
  };

  var dob = new Date('${months[month - 1]} ${day}, ${year} 00:01:00');

  let indexOfDay = dob.getDay();

  //Appropriate AKan Name
  let akanName =""
  Let dayOfWeek = days[indexOfDay]

  //Akan selection 
  switch(gender) {
    case "male":
      akanName = maleAkanNames[indexOfDay]
      break;
    case "female":
      akanName = femaleAkanNames[indexOfDay]
      break;

      default:
      break;
  }

  let finalStatement = "You were born on ${dayOfWeek} and your Akan Name is ${akanNames}

  //set final sattement
  finalStatementElement.innertext = finalStatement