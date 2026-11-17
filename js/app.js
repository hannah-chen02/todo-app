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

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";

    li.append(checkbox, span, deleteButton);
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

list.addEventListener("click", function (event)
{
    if (event.target.classList.contains("delete-btn"))
    {
        event.target.closest("li").remove();
    }
});