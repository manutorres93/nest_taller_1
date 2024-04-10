document.addEventListener('DOMContentLoaded', getTask);

async function getTask(){
  const response = await fetch('http://localhost:3000/task/all');
  const tasks = await response.json();

  const tbody = document.querySelector('.tabla-tareas');

  tasks.forEach((task) => {
    const { title, description, completed } = task;
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${title}</td>
        <td>${description}</td>
        <td>${completed}</td>
        `
    tbody.appendChild(tr);
  });
}