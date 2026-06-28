function greetings(fname) {
  var today = new Date();
  var hour = today.getHours();

  var greeting;
  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return greeting + ", " + (fname || "guest") + "!<br>Welcome to my website!";
}


function startTime() {
  var today = new Date(); // Fresh date object each call
  var weekday = today.getDay();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var dayName = days[weekday];
  
  var day = today.getDate();
  var month = today.getMonth();
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  var monthName = monthNames[month];
  
  var year = today.getFullYear();
  var hour = String(today.getHours()).padStart(2, '0');
  var min = String(today.getMinutes()).padStart(2, '0');
  var sec = String(today.getSeconds()).padStart(2, '0');

  // Update the dateTime element if it exists
  var dateTimeElement = document.getElementById("dateTime");
  if (dateTimeElement) {
    dateTimeElement.innerHTML =
      dayName + ", " + day + " " + monthName + " " + year +
      "<br>" + hour + ":" + min + ":" + sec;
  }
}


function initializeGreetings(fname) {
  // Display greeting message
  var greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.innerHTML = greetings(fname);
  }

  // Start time display
  startTime();
  setInterval(startTime, 1000); // Update every second
}


if (document.readyState === 'loading') {
  // DOM is still loading
  document.addEventListener('DOMContentLoaded', function() {
    initializeGreetings();
  });
} else {
  // DOM is already loaded
  initializeGreetings();
}
const feedbackForms = document.querySelectorAll('.feedback-form');

feedbackForms.forEach(form => {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const successMsg = form.querySelector('.feedback-success');
    successMsg.classList.remove('d-none');
    form.reset();
    setTimeout(() => successMsg.classList.add('d-none'), 3000);
  });
});