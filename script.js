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


const categoryEmergency = form.querySelector('#Emergency');
const categoryImportant = form.querySelector('#Important');
const categoryUrgent = form.querySelector('#Urgent');
const categoryNoRush = form.querySelector('#NoRush');


const submitBtn = form.querySelector('input[type="submit"]');
const closeBtn = document.querySelector('#close-form');


//CODE STARTS HEREE

addNote.addEventListener("click", function () {
  form.classList.remove("hidden")
  card.classList.add("hidden");
});

closeForm.addEventListener("click", function () {
  form.classList.add("hidden")
  card.classList.remove("hidden");
});

form.addEventListener("submit", function(evt){ //triming the spaces
  evt.preventDefault();
  if (imageURL.value.trim() === "" && fullName.value.trim() === "" && homeTown.value.trim() === "" && purpose.value.trim() === ""){
    alert("Please Enter all the fields Properly");
  }
})


