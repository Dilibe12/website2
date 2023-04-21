const counters = document.querySelectorALL('.counter')

counters.forEach(counter => {
    counter.innertext ='0'

    const updateCounter = () => {
        const target = counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 20000

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
       } else {
            counter.innerText = target
       }
    }
    updateCounter()
})