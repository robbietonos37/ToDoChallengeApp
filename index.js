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
    searchText: '',
    hideCompleted: false
}

const renderToDos = function (ToDos, filters) {
    const filteredToDos = ToDos.filter(function (todo) {
        const searchTextMatch = todo.task.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
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


document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderToDos(thingsToDo, filters)
})

document.querySelector('#ToDo-form').addEventListener('submit', function (e) {
    e.preventDefault()

    thingsToDo.push({ task: e.target.elements.newToDo.value, completed: false })
    renderToDos(thingsToDo, filters)
    e.target.elements.newToDo.value = ''
})

const hideCompletedFilter = {
    searchText: 'false'
}

const renderIncompleteTodos = function (Todos, filter) {
    const filteredToDos = Todos.filter(function (todo) {
        return todo.completed === filter
    })

    document.querySelector('#todos').innerHTML = ''

    filteredToDos.forEach(function (todo) {
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.task
        document.querySelector('#todos').appendChild(todoEl)
    })

}

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderToDos(thingsToDo, filters)
})





// 1. Create a form with a single input for todo text
// 2. Setup a submit handler and cancel the default aciton
// 3. Add a new item to the todos array with that text data
// 4. Rerender the application
// 5. clear the input field value