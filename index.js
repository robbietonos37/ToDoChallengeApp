let thingsToDo = getSavedToDos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderToDos(thingsToDo, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderToDos(thingsToDo, filters)
})

document.querySelector('#ToDo-form').addEventListener('submit', function (e) {
    e.preventDefault()

    thingsToDo.push({ task: e.target.elements.newToDo.value, completed: false })
    saveToDos()
    renderToDos(thingsToDo, filters)
    //e.target.elements.newToDo.value = ''
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


