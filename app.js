const body = document.querySelector("body");
const button = document.querySelector("button");

function toggle() {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
}

function toggle() {
  body.classList.toggle('dark')
}

