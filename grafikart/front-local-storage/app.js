console.log('Local Storage:',localStorage)

// Stocker une valeur
localStorage.setItem('hello', 'bonjour') // setItem('key', 'value')

// Récupérer notre valeur
console.log(localStorage.getItem('hello')) // getItem('key')

// Nettoyer le local storage
// localStorage.clear()

// Supprimer un élément
localStorage.removeItem('key')

// Le session storage ne va conserver que sur l'onglet en cours
console.log('Session Storage:',sessionStorage)