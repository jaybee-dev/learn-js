/**
 * Crée un élément HTML représentant un article
 * @param {{title: string, body: string}} post 
 * @returns {HTMLElement}
 */
function createArticle (post) {
    const article = document.createElement('article')
    article.append(createElementWithText('h2', post.title))
    article.append(createElementWithText('p', post.body))
    return article
}

/**
 * 
 * @param {tagName: string} tagName 
 * @param {content: string} content 
 * @returns {HTMLElement}
 */
function createElementWithText (tagName, content) {
    const element = document.createElement(tagName)
    element.innerText = content
    return element
}

async function fetchPosts () {
    const lastPosts = document.querySelector('#lastPosts')
    const loader = document.createElement('p')
    loader.innerText = "Chargement..."
    lastPosts.append(loader)
    try {
        const r = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
        method: 'GET',
        headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        // body: JSON.stringify({title: posts.title})
        })
        if (!r.ok) {
            throw new Error("Erreur serveur")
        }
        const posts = await r.json()
        loader.remove()

        for (let post of posts) {
            lastPosts.append(createArticle(post))
        }

        // for (let i = 0; i < posts.length; i++) {
        //     const postArticle = document.createElement('article')
        //     const postLi = document.createElement('li')
        //     const postTitle = document.createElement('h2')
        //     const postBody = document.createElement('p')
                      
        //     postList.append(postLi)
        //     postLi.append(postArticle)
        //     postArticle.append(postTitle)
        //     postTitle.innerHTML = posts[i].title
        //     postArticle.append(postBody)
        //     postBody.innerHTML = posts[i].body
    
        // }

    } catch (e) {
        loader.innerText = 'Impossible de charger la ressource'
        loader.style.color = 'red'
        return
    }
}

fetchPosts().then(
    posts => posts
    //.forEach(v => console.log('Title:',v.title,'Body:',v.body)),
    // postsTitles => postsTitles.forEach(t => console.log('Title:',t.title)),
    // postsBodys => postsBodys.forEach(b => console.log('Body:',b.body))
    )

console.log('Last posts div:',lastPosts)