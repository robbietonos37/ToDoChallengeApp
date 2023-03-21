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
let numOfItemsLeft = 0
thingsToDo.forEach(function (todo) {

    if (!todo.completed) {
        numOfItemsLeft++
    }
    console.log(numOfItemsLeft)
})
const summaryStatement = document.createElement('p')
summaryStatement.textContent = `You have ${numOfItemsLeft} items left to do`
document.querySelector('body').appendChild(summaryStatement)
// How many todos you have left (p element)
// Add a p for each todo above
thingsToDo.forEach(function (note) {
    const newTask = document.createElement('p')
    newTask.textContent = note.task
    document.querySelector('body').append(newTask)
})