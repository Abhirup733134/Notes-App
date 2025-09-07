//new cards creating and storing to local storage
// local storage theke card show kora
// buttons handle korte hobe 
//filter handle korte hobe


//ALL VARIABLES AND DOCS



let addNote = document.querySelector("#add-note");
let form = document.querySelector("#form");
let card = document.querySelector("#card");
let closeForm = document.querySelector("#close-form");



const imageURL = form.querySelector('input[placeholder="Image URL"]');
const fullName = form.querySelector('input[placeholder="Enter Full Name"]');
const homeTown = form.querySelector('input[placeholder="What\'s the Home Town"]');
const purpose = form.querySelector('input[placeholder="Eg. Appointment needed"]');


const categories = form.querySelectorAll('input[name="Category"]');



const submitBtn = form.querySelector('input[type="submit"]');
const closeBtn = document.querySelector('#close-form');


//CODE STARTS HEREE


function saveToLocalStorage(obj) {
  //purana local storage data nikalo
  if (localStorage.getItem("tasks") === null) {
    let oldTask = [];
    oldTask.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTask));
  }

  else {
    let oldTask = localStorage.getItem("tasks");
    oldTask = JSON.parse(oldTask);
    oldTask.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTask));

  }

}





addNote.addEventListener("click", function () {
  form.classList.remove("hidden")
  card.classList.add("hidden");
});

closeForm.addEventListener("click", function () {
  form.classList.add("hidden")
  card.classList.remove("hidden");
});

form.addEventListener("submit", function (evt) { //triming the spaces
  evt.preventDefault();
  if (imageURL.value.trim() === "" || fullName.value.trim() === "" || homeTown.value.trim() === "" || purpose.value.trim() === "") {
    alert("Please Enter all the fields Properly");
    return;
  }


  let selected = false;
  categories.forEach(function (dets) {
    if (dets.checked) {
      selected = dets.value;
    }

    if (!selected) {
      alert("Please Select categrory");
      return;
    }
  })


  saveToLocalStorage({
    imageURL,
    fullName,
    purpose,
    homeTown,
    selected, 

  })
})





