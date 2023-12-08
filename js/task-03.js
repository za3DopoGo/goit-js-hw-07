const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const cleanedValue = event.currentTarget.value.trim();
  output.textContent = cleanedValue || "Anonymous";
});