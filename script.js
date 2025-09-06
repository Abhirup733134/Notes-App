let form = document.querySelector("#form");
let card = document.querySelector("#card");
let plus = document.querySelector("#plus");

plus.addEventListener("click", function(){
  card.classList.add("hidden");
  form.classList.add("inline")
});

