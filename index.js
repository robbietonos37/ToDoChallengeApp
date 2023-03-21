let thingsToDo = [
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

const todos = document.querySelectorAll('p')

todos.forEach(function (todo) {
    if (todo.textContent.includes('the')) {
        todo.remove()
    }
})