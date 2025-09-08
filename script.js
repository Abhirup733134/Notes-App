//new cards creating and storing to local storage
// local storage theke card show kora
// buttons handle korte hobe 
//filter handle korte hobe


//ALL VARIABLES AND DOCS



let addNote = document.querySelector("#add-note");
let form = document.querySelector("#form");
let card = document.querySelector("#card");
let closeForm = document.querySelector("#close-form");
let LeftButtons = document.querySelector("#LeftButtons");
let RightButtons = document.querySelector("#RightButtons");

const stack = document.querySelector("#card");



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
  RightButtons.classList.add("hidden");
  LeftButtons.classList.add("hidden");
});

closeForm.addEventListener("click", function () {
  form.classList.add("hidden")
  card.classList.remove("hidden");
  RightButtons.classList.remove("hidden");
  LeftButtons.classList.remove("hidden");
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
  })


  saveToLocalStorage({
    imageURL: imageURL.value,
    fullName: fullName.value,
    purpose: purpose.value,
    homeTown: homeTown.value,
    selected,
  })


  form.classList.add("hidden");
  card.classList.remove("hidden");
  document.querySelector("form").reset();
  window.location.reload();
  RightButtons.classList.remove("hidden");
  LeftButtons.classList.remove("hidden");

  
})





function showCards() {
  let allTasks = JSON.parse(localStorage.getItem("tasks"));

  allTasks.forEach(function(task){
    // Card div
    const card = document.createElement("div");
    card.className =
      "w-[28vw] h-[40vh] bg-[#ffffff] rounded-[20px] p-6 flex flex-col gap-[2vh] shadow-xl";

    // Profile image wrapper
    const profileWrapper = document.createElement("div");
    profileWrapper.className = "w-[5rem] h-[5rem] rounded-[100%] overflow-hidden";

    // Profile image
    const profileImg = document.createElement("img");
    profileImg.src = task.imageURL;
    profileImg.alt = "error";
    profileImg.className = "w-full h-full object-cover";

    // Append image inside wrapper
    profileWrapper.appendChild(profileImg);

    // Name
    const nameHeading = document.createElement("h2");
    nameHeading.className = "font-bold text-[1.5rem]";
    nameHeading.textContent = task.fullName;

    // Info section
    const infoDiv = document.createElement("div");

    // Home Town row
    const homeRow = document.createElement("div");
    homeRow.className = "flex justify-between";
    const homeLabel = document.createElement("span");
    homeLabel.textContent = "Home Town";
    const homeValue = document.createElement("span");
    homeValue.textContent = task.homeTown;
    homeRow.appendChild(homeLabel);
    homeRow.appendChild(homeValue);

    // Bookings row
    const bookingRow = document.createElement("div");
    bookingRow.className = "flex justify-between";
    const bookingLabel = document.createElement("span");
    bookingLabel.textContent = "Purpose";
    const bookingValue = document.createElement("span");
    bookingValue.textContent = task.purpose;
    bookingRow.appendChild(bookingLabel);
    bookingRow.appendChild(bookingValue);

    // Append rows inside infoDiv
    infoDiv.appendChild(homeRow);
    infoDiv.appendChild(bookingRow);

    // Buttons container
    const btnContainer = document.createElement("div");
    btnContainer.className = "flex gap-[0.5vw] mt-[1vh]";

    // Call button
    const callBtn = document.createElement("div");
    callBtn.className =
      "bg-[#010101] w-[5vw] h-[4vh] rounded-full flex justify-center items-center text-white";
    const callText = document.createElement("span");
    callText.textContent = "Call";
    callBtn.appendChild(callText);

    // Message button
    const msgBtn = document.createElement("div");
    msgBtn.className =
      "bg-[#ececec] w-[6vw] h-[4vh] rounded-full flex justify-center items-center";
    const msgText = document.createElement("span");
    msgText.textContent = "Message";
    msgBtn.appendChild(msgText);

    // Append buttons
    btnContainer.appendChild(callBtn);
    btnContainer.appendChild(msgBtn);

    // Append everything to card
    card.appendChild(profileWrapper);
    card.appendChild(nameHeading);
    card.appendChild(infoDiv);
    card.appendChild(btnContainer);

    // Finally, append card to body (or any target container)
    document.querySelector("#card").appendChild(card);

  })

}

showCards();









