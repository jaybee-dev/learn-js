console.log('Page loaded')

function remove (e) {
    const btn = document.querySelector('.custom')
    btn.dispatchEvent(
        new CustomEvent('delete')
    )
}

document.querySelector('.delete').addEventListener('delete', (e) => {
    console.log(e)
})