const formData = {
    email: "",
    message: ""
}

const KEY_STORAGE = "feedback-form-state";

const form = document.querySelector(".feedback-form");

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

populateText();

function handleSubmit(event) {
     event.preventDefault();
     form.reset();
     localStorage.removeItem(KEY_STORAGE);
}

function handleInput(event) {
    const key = event.target.name;
    formData[key] = event.target.value;
    localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
}

function populateText() {

    const data = JSON.parse(localStorage.getItem("feedback-form-state"));

    if (!data) {
        return
    };
    
    const { email, message } = form.elements;

    email.value = data.email;
    message.value = data.message;
}
