import { TodoList } from "./components/TodoList.js";
import { fetchJSON } from "./functions/api.js";
import { createElement } from "./functions/dom.js";

try {
    const todos = await fetchJSON ('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const list = new TodoList(todos)
    list.appendTo(document.querySelector('#todolist'))
} catch (e) {
    const alertElement = createElement('div', {
        class: 'alert alert-danger m-2',
        role: 'alert'
    })
    alertElement.innerText = "Impossible de charger les éléments"
    document.body.prepend(alertElement)
}
/**
 * Crée un élément HTML représentant une tâche
 * @param {{title: string, id: number, completed: boolean}} task 
 * @returns {HTMLElement}
 */
function createTask (task) {
    const li = document.createElement('li')
        li.classList.add('todo', 'list-group-item', 'd-flex', 'align-items-center')
    const input = document.createElement('input')
        input.classList.add('form-check-input')
        input.setAttribute('type', 'checkbox')
        input.setAttribute('id', 'todo-'+task.id)
    const label = document.createElement('label')
        label.classList.add('ms-2', 'form-check-label')
        label.setAttribute('for', 'todo-'+task.id)
        label.innerText = task.title

    const labelTrash = document.createElement('label')
        labelTrash.classList.add('ms-auto', 'btn', 'btn-danger', 'btn-sm')
    const i = document.createElement('i')
        i.classList.add('bi-trash')

    li.append(input)
    li.append(label)
    li.append(labelTrash)
    labelTrash.append(i)
    const article = document.createElement('article')
    return li 
}

async function fetchTasks () {
    const lastTasks = document.querySelector('.list-group')
    
    const loader = document.createElement('li')
    loader.innerText = "Chargement..."
    lastTasks.append(loader)
    try {
        const r = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5', {
        method: 'GET',
        headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        })
        if (!r.ok) {
            throw new Error("Erreur serveur")
        }
        const tasks = await r.json()
        loader.remove()

        for (let task of tasks) {
            console.log(task)
            lastTasks.append(createTask(task))
        }

    } catch (e) {
        loader.innerText = 'Impossible de charger la ressource'
        loader.style.color = 'red'
        return
    }
}

// fetchTasks().then(tasks => tasks)

// class Task {
//     ecole = 'Jules Ferry'
//     _notes = [] // on défini dès le début un tableau vide

//     constructor (title) {
//         this.title = title
// }

// set _notes (v) {
//     if (Array.isArray(v)) { // permet de vérifier si c'est bien un tableau
//         this._notes = v
//     } 
// }


// get name () { // pas de paramètres à définir car pour y accéder on pourra simplement faire 'john.name'
//     return `${this.firstname} ${this.lastname}`
// }


// setSpec (spec) {
//     this.spec = spec
// }

// canPass () {
//     return moyenne(this._notes) >= 10
// }

// static moyenne = 10
// }