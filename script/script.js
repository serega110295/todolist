let input = document.querySelector('.todoText');
let addTodoBtn = document.querySelector('.addTodo');
let list = document.querySelector('.todo');
let clearListBtn = document.querySelector('.clearBtn');
let doneTasks = document.querySelector('.doneTask');
let notDoneTasks = document.querySelector('.notDoneTasks')
let allTasks = document.querySelector('.allTasks')


let arrayOfMessages = []

const displayMessages = () => {

    list.innerHTML = ''

    arrayOfMessages.forEach(item => {
        const wrapper = document.createElement('div')
        wrapper.className = 'wrapperMessages'
        const btnDeleteTasks = document.createElement('button')
        btnDeleteTasks.className = 'btnDeleteTasks'
        btnDeleteTasks.innerHTML = '❌'

        const todoTitle = document.createElement('h3')
        todoTitle.innerHTML = item.text
        todoTitle.addEventListener('click', () => {
            todoTitle.className = 'doneWrapperMessages'
            item.isDone = true
        })
        
        
        wrapper.appendChild(todoTitle)
        list.appendChild(wrapper)
        wrapper.appendChild(btnDeleteTasks)
        btnDeleteTasks.onclick = () => wrapper.remove() 
    })

}


doneTasks.onclick = () => {

    list.innerHTML = ''

    let filterDoneTask = arrayOfMessages.filter(f => f.isDone === true);
    filterDoneTask.forEach(item => {
        const wrapper = document.createElement('div')
        wrapper.className = 'wrapperMessages'

        const todoTitle = document.createElement('h3')
        todoTitle.innerHTML = item.text
        todoTitle.className = 'doneWrapperMessages'

        const btnDeleteTasks = document.createElement('button')
        btnDeleteTasks.className = 'btnDeleteTasks'
        btnDeleteTasks.innerHTML = '❌'

        wrapper.appendChild(todoTitle)
        list.appendChild(wrapper)

        wrapper.appendChild(btnDeleteTasks)
        btnDeleteTasks.onclick = () => wrapper.remove() 
    })
    

}

notDoneTasks.onclick = () => {

    list.innerHTML = ''

    let filterNotDoneTask = arrayOfMessages.filter(f => f.isDone !== true);

    filterNotDoneTask.forEach(item => {
        
        const wrapper = document.createElement('div')
        wrapper.className = 'wrapperMessages'

        const todoTitle = document.createElement('h3')
        todoTitle.innerHTML = item.text

        const btnDeleteTasks = document.createElement('button')
        btnDeleteTasks.className = 'btnDeleteTasks'
        btnDeleteTasks.innerHTML = '❌'

        wrapper.appendChild(todoTitle)
        list.appendChild(wrapper)

        wrapper.appendChild(btnDeleteTasks)
        btnDeleteTasks.onclick = () => wrapper.remove()   
        
    })

    
}

allTasks.onclick = () => {

    list.innerHTML = ''

    arrayOfMessages.forEach(item => {
        const wrapper = document.createElement('div')
        wrapper.className = 'wrapperMessages'

        const todoTitle = document.createElement('h3')
        todoTitle.innerHTML = item.text

        const btnDeleteTasks = document.createElement('button')
        btnDeleteTasks.className = 'btnDeleteTasks'
        btnDeleteTasks.innerHTML = '❌'

        if(item.isDone === true){
            todoTitle.className = 'doneWrapperMessages'
        }

        wrapper.appendChild(todoTitle)
        list.appendChild(wrapper)

        wrapper.appendChild(btnDeleteTasks)
        btnDeleteTasks.onclick = () => wrapper.remove()

    })
    
}

addTodoBtn.onclick = () => {
    if (input.value === '') {
        alert('Please enter todo!')
        return
    }

    const todo = {
        text: input.value,
        isDone: false,
    }

    arrayOfMessages.push(todo)
    displayMessages()

    input.value = '';

}




//Очистить все.
clearListBtn.onclick = () => {
    while (arrayOfMessages.length > 0) {
        arrayOfMessages.pop()
    }
    list.innerHTML = ''
}

