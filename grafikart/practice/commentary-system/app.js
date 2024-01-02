import { fetchJSON } from "./functions/api.js" // import de notre API de fetch

class InfinitePagination {
    
    // properties ; add "#" for private properties
    /** @type {string} */
    #endpoint
    /** @type {HTMLTemplateElement} */
    #template
    /** @type {HTMLElement} */
    #target
    /** @type {string} */
    #elements
    /** @type {Object} */
    #observer
    /** @type {boolean} */
    #loading
    
    /**
     * 
     * @param {HTMLElement} element 
     */
    constructor (element) {
        this.#endpoint = element.dataset.endpoint
        this.#template = document.querySelector(element.dataset.template) // mieux d'avoir directement l'élément
        this.#target = document.querySelector(element.dataset.target) // idem que ci-dessus
        this.#elements = JSON.parse(element.dataset.elements)
        this.#observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    this.#loadMore()
                }
            }
        })
        this.#observer.observe(element)
    }
    async #loadMore() { // attention, fonction asynchrone
        if (this.#loading) { // grâce à #loading, on gère le cas des connexions lentes et on évite d'envoyer plusieurs fois la requête du fetch tant que rien n'est afficher
            return
        }
        this.#loading = true
        const comments = await fetchJSON(this.#endpoint) // ne pas oublier le 'await'
        for (const comment of comments) { // pour chaque commentaire...
            const commentElement = this.#template.content.cloneNode(true) // ...on prend le template et on va cloner le contenu (qui est un fragment)
            // console.log(this.#elements)
            for (const [key, selector] of Object.entries(this.#elements)) {
                commentElement.querySelector(selector).innerText = comment[key]
                console.log({key, selector})
            }
            this.#target.append(commentElement)
        }
        this.#loading = false
    }
}

document.querySelectorAll('.js-infinite-pagination').forEach(el => new InfinitePagination(el))