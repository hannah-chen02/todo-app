const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

function createTaskElement(text)
{
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;

    li.append(checkbox, span);
    return li;
}

form.addEventListener("submit", function (event)
{
    event.preventDefault();

    const text = input.value.trim();
    if (text === "")
    {
        return;
    }

    list.appendChild(createTaskElement(text));
    input.value = "";
    input.focus();
});

list.addEventListener("change", function (event)
{
    if (event.target.type === "checkbox")
    {
        const li = event.target.closest("li");
        li.classList.toggle("completed", event.target.checked);
    }
});