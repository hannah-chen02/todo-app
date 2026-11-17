# TODO App

A simple task manager built with HTML, CSS and JavaScript.

## Features

- Create a new task
- Mark a task as completed
- Delete a task

Tasks are not saved yet, so they disappear when the page is refreshed.

## Requirements

- A modern web browser (Chrome, Edge, Firefox or Safari)
- [Git](https://git-scm.com/) to clone the project
- Optional: [VS Code](https://code.visualstudio.com/) with the **Live Server** extension


## Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/hannah-chen02/todo-app.git
   cd todo-app
   ```

2. Start the app using any one of these options:

   **Option A: open the file directly**

   ```bash
   start index.html
   ```

   On macOS use `open index.html`, and on Linux use `xdg-open index.html`.

   **Option B: VS Code Live Server (reloads on save)**

   1. Open the folder in VS Code with `code .`
   2. Install the **Live Server** extension (Ritwick Dey)
   3. Right-click `index.html` and choose **Open with Live Server**
   4. The app opens at `http://127.0.0.1:5500`

   **Option C: Python local server**

   ```bash
   python -m http.server 8000
   ```

   Then open `http://localhost:8000` in your browser. Stop the server with `Ctrl+C`.

## How to use

1. Type a task into the input box and click **Add** (or press Enter).
2. Tick the checkbox next to a task to mark it as completed.
3. Click **Delete** to remove a task.