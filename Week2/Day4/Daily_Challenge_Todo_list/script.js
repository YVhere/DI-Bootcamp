// Daily Challenge : Todo list

// 1. Empty array for the tasks
const tasks = [];

// the id for the next new task (starts from 0)
let nextId = 0;

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const listTasks = document.querySelector(".listTasks");

// 2. Add a task
function addTask(event) {
    event.preventDefault();

    const text = input.value.trim();

    // check that the input is not empty
    if (text === "") {
        alert("Please write a task");
        return;
    }

    // BONUS I: each task is an object
    const task = {
        task_id: nextId,
        text: text,
        done: false
    };
    tasks.push(task);
    nextId++;

    // the box for one task, with data-task-id
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.setAttribute("data-task-id", task.task_id);

    // "X" button (Font Awesome icon)
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    deleteBtn.addEventListener("click", function () {
        deleteTask(task.task_id);
    });

    // checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "task-" + task.task_id;
    checkbox.addEventListener("change", function () {
        doneTask(task.task_id);
    });

    // label = text of the task
    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.textContent = task.text;

    // put everything together: X, checkbox, label
    taskDiv.appendChild(deleteBtn);
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    listTasks.appendChild(taskDiv);

    // clear the input for the next task
    input.value = "";
}

// BONUS I: mark a task as done / not done
function doneTask(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].task_id === id) {
            tasks[i].done = !tasks[i].done;

            const taskDiv = document.querySelector(`[data-task-id="${id}"]`);
            if (tasks[i].done) {
                taskDiv.classList.add("done");
            } else {
                taskDiv.classList.remove("done");
            }
        }
    }
    console.log(tasks);
}

// BONUS II: delete a task
function deleteTask(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].task_id === id) {
            tasks.splice(i, 1);
            break;
        }
    }

    const taskDiv = document.querySelector(`[data-task-id="${id}"]`);
    taskDiv.remove();

    console.log(tasks);
}

form.addEventListener("submit", addTask);