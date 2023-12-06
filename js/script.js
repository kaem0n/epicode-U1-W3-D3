const form = document.getElementById('main-form')
const input = document.getElementById('input')
const list = document.querySelector('section')
form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (input.value === '') {
        alert('Il campo è vuoto!')
    } else {
        const listBlock = document.createElement('div')
        listBlock.classList.add('task')
        listBlock.innerHTML = `
        <span class="listItem" onclick="barred(event)"></i> ${input.value}</span>
        <button class="eraser" onclick="cancel(event)"><i class="fas fa-eraser"></i></button>
        `
        list.appendChild(listBlock)
        input.value = ''
    }
})

const barred = function (e) {
    console.log(e)
    console.log(e.target)
    e.target.classList.add('barred')
}

const cancel = function (e) {
    console.log(e.target)
    e.target.closest('.task').classList.add('cancel')
}