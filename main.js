let inputEl = document.querySelector('#input')
const notificationEl = document.querySelector('#notification')
let errorEl = document.querySelector('#error')
let email = ['example@email.com']

console.log(email[0])

notificationEl.addEventListener('click', function() {
    inputEl.value = ""
    if (email === email[0]) {
        console.log('success')
    } else {
        errorEl.textContent = "Please provide a valid email address"
    }
})