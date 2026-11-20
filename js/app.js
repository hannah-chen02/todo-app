const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

const STORAGE_KEY = "todo-tasks";

let tasks = loadTasks();

function loadTasks()
{
    try
    {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    }
    catch (error)
    {
        // Corrupted or unreadable data: start fresh instead of crashing
        return [];
    }
}

function saveTasks()
{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function createTaskElement(task)
{
    const li = document.createElement("li");
    li.dataset.id = task.id;
    li.classList.toggle("completed", task.completed);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    const span = document.createElement("span");
    span.textContent = task.text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";

    li.append(checkbox, span, deleteButton);
    return li;
}

function renderTasks()
{
    list.innerHTML = "";
    tasks.forEach(function (task)
    {
        list.appendChild(createTaskElement(task));
    });
}

form.addEventListener("submit", function (event)
{
    event.preventDefault();

    const text = input.value.trim();
    if (text === "")
    {
        return;
    }

    const task = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(task);
    saveTasks();
    list.appendChild(createTaskElement(task));

    input.value = "";
    input.focus();
});

list.addEventListener("change", function (event)
{
    if (event.target.type === "checkbox")
    {
        const li = event.target.closest("li");
        const id = Number(li.dataset.id);
        const task = tasks.find(function (t)
        {
            return t.id === id;
        });

        if (task)
        {
            task.completed = event.target.checked;
            saveTasks();
            li.classList.toggle("completed", task.completed);
        }
    }
});

list.addEventListener("click", function (event)
{
    if (event.target.classList.contains("delete-btn"))
    {
        const li = event.target.closest("li");
        const id = Number(li.dataset.id);

        tasks = tasks.filter(function (t)
        {
            return t.id !== id;
        });
        saveTasks();
        li.remove();
    }
});

renderTasks();