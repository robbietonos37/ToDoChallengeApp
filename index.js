const thingsToDo = [
    {
        task: 'Clean room',
        completed: true
    }, {
        task: 'Submit applications',
        completed: false
    }, {
        task:
            'Finish math homework',
        completed: true
    }, {
        task: 'Finish algo homework',
        completed: false
    }, {
        task: 'Finish 450 Homework',
        completed: false
    }]

/*This is how I did it and it still worked
let numOfThingsTodo = 0
thingsToDo.forEach(function(todo)){
    if(!todo.completed){
        numOfThingsTodo++;

    }
    //we just used this variable in our summarystatement
}
*/

// 1. Setup a div container for todos
// 2. Setup filters (searchText) and wire up a new filter input to change it 
// 3. Create a renderToDos function to render and rerender the latest filtered data


// Starts

const filters = {
    searchText: ''
}

const renderToDos = function (ToDos, filters) {
    const filteredToDos = ToDos.filter(function (todo) {
        return todo.task.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredToDos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summaryStatement = document.createElement('p')
    summaryStatement.textContent = `You have ${incompleteTodos.length} items left to do`
    document.querySelector('#todos').appendChild(summaryStatement)



    filteredToDos.forEach(function (todo) {
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.task
        document.querySelector('#todos').appendChild(todoEl)
    })
}

renderToDos(thingsToDo, filters)





// How many todos you have left (p element)
// Add a p for each todo above
/*
thingsToDo.forEach(function (note) {
    const newTask = document.createElement('p')
    newTask.textContent = note.task
    document.querySelector('body').appendChild(newTask)
})
*/

//Ends


document.querySelector('#add-todo').addEventListener('click', function (event) {
    console.log('do something')
})

document.querySelector('#new-todo-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderToDos(thingsToDo, filters)
})