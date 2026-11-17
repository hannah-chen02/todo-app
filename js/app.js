const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

function createTaskElement(text) {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = input.value.trim();
    if (text === "") {
        return;
    }

    list.appendChild(createTaskElement(text));
    input.value = "";
    input.focus();
});