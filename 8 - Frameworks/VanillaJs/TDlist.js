document.getElementById("task-form").onsubmit = (event) => {
    event.preventDefault()
    const newTask = new window.FormData(event.target).get('task')

    if (newTask){
        addTask(newTask)
    }
    else{
        console.log('empty task')
    }
}

function addTask(newTask){
    list = document.getElementById('task-list')
    item = document.createElement('li')
    item.innerText = newTask
    list.appendChild(item)
}