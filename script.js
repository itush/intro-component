let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let fname = id("fname"),
    lname = id("lname"),    
    email = id("email"),
    password = id("pword"),
    form = id("form"),
    errorMsg = classes("error"), 
    failureIcon = classes("failure-icon");

// Adding the submit event Listener

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(fname, 0, "First name can not be empty");
  engine(lname, 1, "Last name can not be empty");
  engine(email, 2, "Looks like this is not an email");
  engine(password, 3, "Password can not be empty");
});

// engine function which will do all the works

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
   
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
   
  }
};
