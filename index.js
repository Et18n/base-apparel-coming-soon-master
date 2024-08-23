let btn = document.getElementById("btn");
let email = document.getElementById("email");
let errimg = document.getElementById("errimg");
let errmsg = document.getElementById("errmsg");
btn.addEventListener("click", (e) => {
  let data = email.value;
  console.log(data);
  if (data === "") {
    email.style.borderColor = "red";
    errimg.classList.remove("hidden");
    errmsg.classList.remove("hidden");
  } else if (!validate(data)) {
    email.style.borderColor = "red";
    errimg.classList.remove("hidden");
    errmsg.classList.remove("hidden");
  } else {
    email.style.borderColor = "";
    errimg.classList.add("hidden");
    errmsg.classList.add("hidden");
  }
});

function validate(data) {
  let value = /\S+@\S+\.\S+/;
  return value.test(data);
}
