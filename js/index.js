//Input = Birthday
//Output = Akan Name(Day of the week)

function generateAkanName (){
  let button = document.getElementById("submitButton")

 button.addEventListener("click", function callBack(event){
  
  let dayOfBirth = parseInt(document.getElementById("day").value)
  let monthOfBirth = parseInt(document.getElementById("month").value)
  let yearOfBirth = parseInt(document.getElementById("year").value)
  let MI = document.getElementsByName("gender")[0].checked
  let FI = document.getElementsByName("gender")[1].checked
  let gender = MI ? "male" : "female" 
  let finalStatementElement = document.getElementById("finalStatement")
  
  let minYob = 1900
  let maxYob = 2022

  //Months of the year
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
  "November", "December"]
  //Days of the week
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //Akan Names
  let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  let maleAkanNames = ["Kwasi", "Kwadwo", "kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

  //If a day is greater than 31 or less than 1. Prompt the user.
  if (dayOfBirth > 31 || dayOfBirth < 1) {
    alert("Invalid date.")
    return false
  }
  if (monthOfBirth === 2 && dayOfBirth >29) {
    alert("Invalid date. February < 29 days")
      return false;  
  }
  //Month of February(Leap Year)
  if(monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
    if(dayOfBirth > 28 || dayOfBirth < 1) {
      alert("Invalid date.Leap year < 28 days")
      return false; 
    }
    
  }
  
  if (monthOfBirth > 12 || monthOfBirth < 1) {
    alert("Invalid month.")
    return false
  };
  
  if (yearOfBirth < minYob || yearOfBirth > maxYob) {
    alert("Invalid year.")
    return false
  };

  var dob = new Date(`${months[monthOfBirth - 1]} ${dayOfBirth}, ${yearOfBirth} 00:01:00`);
  

  let indexOfDay = dob.getDay();

  //Appropriate AKan Name
  let akanName =""
  let dayOfWeek = days[indexOfDay]

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
  let finalStatement = `You were born on ${dayOfWeek} and your Akan Name is ${akanName}`;

  //set final sattement
  finalStatementElement.innerText = finalStatement
 })
}

generateAkanName()


