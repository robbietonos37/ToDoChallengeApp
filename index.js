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

    thingsToDo.push({ id: uuidv4(), task: e.target.elements.text.value, completed: false })
    saveToDos(thingsToDo)
    renderToDos(thingsToDo, filters)
    e.target.elements.text.value = ''
})

const hideCompletedFilter = {
    searchText: 'false'
}

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderToDos(thingsToDo, filters)
})


