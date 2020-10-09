const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("input", (e) => {
  if (e.target.value.length === 6) {
    inputRef.classList.add("valid");
  }
});

inputRef.addEventListener("blur", (e) => {
  if (e.target.value.length !== 6) {
    inputRef.classList.add("invalid");
  } else {
    inputRef.classList.remove("invalid");
  }
});
