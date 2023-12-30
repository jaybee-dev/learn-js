const button = document.querySelector('button')
button.addEventListener('click', function (event) {
    // alert('Bonjour')
    console.log(event.target, event.currentTarget)
    // 'target' donne la cible sur laquelle on a véritablement cliqué (ici la span dans le bouton)
    // 'currentTarget' donne le sujet du listener (le bouton)
})