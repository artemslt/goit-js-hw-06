const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let formInfo = {};
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill email and password");
  }
  formInfo = { email: email.value, password: password.value };
  console.log(formInfo);
  event.currentTarget.reset();
}
