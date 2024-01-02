// const button = document.querySelector('button')
// button.addEventListener('click', function (event) {
//     // alert('Bonjour')
//     console.log(event.target, event.currentTarget)
//     // 'target' donne la cible sur laquelle on a véritablement cliqué (ici la span dans le bouton)
//     // 'currentTarget' donne le sujet du listener (le bouton)
// })

// /**
//  * @param {PointerEvent} event 
//  */
// function onButtonClick (event) {
//     event.preventDefault() // Empêche le comportement par défaut d'un élement
//     event.stopPropagation() // Stoppe la propagation vers les éléments parents
//     console.log(event.currentTarget)
// }

// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', onButtonClick)
// })

// document.querySelector('div').addEventListener('click', onButtonClick)

////////////////////////////////////////////////////////

document.querySelector('form').addEventListener('submit', (e) => {
    // const form = e.currentTarget
    // const data = new FormData(form)
    // const firstname = data.get('firstname')
    // if (firstname.length < 2) { // Cette condition permet d'empêcher la soumission du formulaire tant que le nom a moins de 2 caractères
    //     e.preventDefault()
    // }
})

// Détecter le contenu de l'input avec 'input'
document.querySelector('input').addEventListener('input', (e) => {
    console.log('input', e.currentTarget.value) // on affiche dans la console le contenu de l'input
})

// Détecter les touches pressées avec 'keydown' (pour réaliser des action comme par exemple le raccourci vers la recherche)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey === true && e.key === 'k') {
        e.preventDefault()
        console.log('Raccourci Ctrl + K détécté')
    }
} ) 
// 'keyup' détecte quand la touche est relâchée
// 'keypress' qui détecte quand la touche à été appuyée
// si on appuie sur une touche on aura cet ordre : 'keydwon' => 'keypress' => 'keyup'

// Détecte quand un élement a le focus (l'inverse étant 'blur')
document.querySelector('input').addEventListener('focus', (e) => {
    console.log('Focus!',e) // on affiche dans la console le contenu de l'input
})

// Détecter les changements sur une checkbox
document.querySelector('#checkbox').addEventListener('change', (e) => {
    console.log(e) // on affiche l'évenement du changement d'état
    console.log(e.currentTarget.checked) // on affiche l'état de la checkbox sous forme de booléen
})

// Détecter les changements sur une liste déroulante
document.querySelector('select').addEventListener('change', (e) => {
    console.log(e) // on affiche l'évenement du changement d'état
    console.log("Value:",e.currentTarget.value) // on affiche dans la console la valeur du select choisi
    console.log(e.currentTarget.selectedOptions) // renvoi un HTLMCollection dans lequel on pourrait récupérer des valeurs teles que les attributs par exemple
})

//// PRACTICE ////

document.querySelectorAll('.spoiler').forEach(spoiler => {
    spoiler.addEventListener('click', (e) => {
        console.log(e.currentTarget.innerText)
        spoiler.classList.remove('spoiler') // 'e.currentTarget.classList.remove('spoiler')' fonctionnerait aussi
    })
})



// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', onButtonClick)
// })
