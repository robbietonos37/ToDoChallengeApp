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

/*This is how I did it and it still worked
let numOfThingsTodo = 0
thingsToDo.forEach(function(todo)){
    if(!todo.completed){
        numOfThingsTodo++;

    }
    //we just used this variable in our summarystatement
}
*/

const incompleteTodos = thingsToDo.filter(function (todo) {
    return !todo.completed
})
const summaryStatement = document.createElement('p')
summaryStatement.textContent = `You have ${incompleteTodos.length} items left to do`
document.querySelector('body').appendChild(summaryStatement)
// How many todos you have left (p element)
// Add a p for each todo above
thingsToDo.forEach(function (note) {
    const newTask = document.createElement('p')
    newTask.textContent = note.task
    document.querySelector('body').appendChild(newTask)
})


document.querySelector('#add-todo').addEventListener('click', function (event) {
    console.log('do something')
})

document.querySelector('#new-todo-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})