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
const saveToDos = function (thingsToDo) {
    localStorage.setItem('thingsToDo', JSON.stringify(thingsToDo))
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

    generateSummaryDOM(incompleteTodos)

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredToDos.forEach(function (todo) {
        generatetodosDOM(todo)
        document.querySelector('#todos').appendChild(generatetodosDOM(todo))
    })
}

// Get the DOM elements for an individual note
const generatetodosDOM = function (todo) {
    const todoEl = document.createElement('p')
    todoEl.textContent = todo.task
    return todoEl
}

// Get the DOM elements for list summary

const generateSummaryDOM = function (incompleteTodos) {
    const summaryStatement = document.createElement('p')
    summaryStatement.textContent = `You have ${incompleteTodos.length} items left to do`
    return summaryStatement
}