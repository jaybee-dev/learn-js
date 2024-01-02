const observer = new IntersectionObserver((entries) => {
    console.log(entries)
    for (let entry of entries) {
        // console.log('Target:',entry.target, 'isIntersecting:',entry.isIntersecting)
        if (entry.isIntersecting) {
            entry.target.animate([
                {transform: 'translateX(-30px)', opacity: 0},
                {transform: 'translateX(0px)', opacity: 1},
            ],
                {duration: 300}
            )
            observer.unobserve(entry.target) // permet d'arrêter d'observer une fois que l'élément à été visible au moins une fois
        }
    }
})

observer.observe(document.querySelector('.btn1'))
observer.observe(document.querySelector('.btn2'))
// observer.disconnect() // déconnecte tous les observeurs