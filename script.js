{
   const euro = document.querySelector(".js-euro");
   const current = document.querySelector(".js-current");
   const form = document.querySelector(".js-form");
   const result = document.querySelector(".js-result");

   form.addEventListener("submit", (event) => {
      event.preventDefault();

      const euroE = euro.value;
      const currentE = current.value;
      const resultE = euroE * currentE;

      result.innerText = resultE.toFixed(2);
   })

}