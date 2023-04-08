// Fetch existing todos from localStorage
const getSavedToDos = function () {
    const todoJSON = localStorage.getItem('thingsToDo')

    if (todoJSON !== null) {

        return JSON.parse(todoJSON)
    } else {
        return []
    }
}

// Save todos in localStorage
const saveToDos = function (todos) {
    localStorage.setItem('thingsToDo', JSON.stringify(todos))
}

// Render application todos based on filters

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
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredToDos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generatetodosDOM(todo))
    })
}

// Setup a root div
// Setup and append a checkbox (set type attribute)
// someNode.setAttribute('type', 'checkbox)
// Setup and append a span (set text)
// Setup and append a button (set text)

// Get the DOM elements for an individual note
const generatetodosDOM = function (todo) {
    const rootDiv = document.createElement('div')
    const todoCheckBox = document.createElement('input')
    const todoEl = document.createElement('span')
    const deleteButton = document.createElement('button')

    //Setup todo checkbox
    todoCheckBox.setAttribute('type', 'checkbox')
    rootDiv.appendChild(todoCheckBox)

    // Setup the todo text
    todoEl.textContent = todo.task
    rootDiv.appendChild(todoEl)

    // Setup the remove button
    deleteButton.textContent = 'Delete'
    rootDiv.appendChild(deleteButton)

    return rootDiv
}

// Get the DOM elements for list summary

const generateSummaryDOM = function (incompleteTodos) {
    const summaryStatement = document.createElement('h2')
    summaryStatement.textContent = `You have ${incompleteTodos.length} items left to do`
    return summaryStatement
}