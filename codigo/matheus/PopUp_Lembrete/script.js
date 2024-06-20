const openEventButtons = document.querySelectorAll('[data-event-target]')
const closeEventButtons = document.querySelectorAll('[data-close-button]')
/* const editEventButtons = document.querySelectorAll('[data-edit-button]') */
const overlay = document.getElementById('overlay')

openEventButtons.forEach(button => {
    button.addEventListener('click', () => {
        const event = document.querySelector(button.dataset.eventTarget)
        openEvent(event)
    })
})

closeEventButtons.forEach(button => {
    button.addEventListener('click', () => {
        const event = button.closest('.event')
        closeEvent(event)
    })
})

function openEvent(event) {
    if (event == null) return
    event.classList.add('active')
    overlay.classList.add('active')
}

function closeEvent(event) {
    if (event == null) return
    event.classList.remove('active')
    overlay.classList.remove('active')
}

// no json code anymore
