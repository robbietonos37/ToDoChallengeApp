const todos = document.querySelectorAll('p')

todos.forEach(function (todo) {
    if (todo.textContent === 'the') {
        todo.remove()
    }
    console.log(todo.textContent)
})