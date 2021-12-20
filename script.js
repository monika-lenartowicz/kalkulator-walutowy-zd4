let euro = document.querySelector(".js-euro");
let current = document.querySelector(".js-current");
let form = document.querySelector(".js-form");
let result = document.querySelector(".js-result");


form.addEventListener("submit", (event) => {
   event.preventDefault();

   let euroE = euro.value;
   let currentE = current.value;
   let resultE = euroE * currentE;

   result.innerText = resultE.toFixed(2);
})


