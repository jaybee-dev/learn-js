// Stocker un cookie manuellement ('name=value')
document.cookie = 'name_of_cookie=value_of_cookie'

// On peut visualiser les cookies dans un console.log
console.log(document.cookie)

//// A CONVERSER ////
/**
 * 
 * @param {string} name 
 * @return {string|null}
 */
function getCookie(name) {
    const cookies = document.cookie.split('; ')
    const value = cookies
        .find(c => c.startsWith(name))
        ?.split('=')[1]
    if (value === undefined) {
        return null
    }
    return decodeURIComponent(value) // la fonction 'decodeURIComponent()' permet de décoder une URL (par exemple avec les espace en '%20')
}


/**
 * 
 * @param {string} name 
 * @param {string} value 
 * @param {number} days 
 */
function setCookie(name, value, days) {
    const date = new Date()
    date.setDate(date.getDate() + days)
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()};`
}

setCookie('Hello', 'Bonjour les gens', 3)

console.log(getCookie('Hello'))