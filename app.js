const textarea = document.querySelector("textarea");
const count = document.querySelector(".count");

function counter() {
  count.innerText = `${textarea.value.length}`;
}
