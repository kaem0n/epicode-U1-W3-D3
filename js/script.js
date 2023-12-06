const form = document.getElementById('main-form')
const input = document.getElementById('input')
const list = document.querySelector('section')
form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (input.value === '') {
        alert('Il campo è vuoto!')
    } else {
        const listBlock = document.createElement('div')
        listBlock.innerHTML = `
        <span class="listItem"></i> ${input.value}</span>
        <button class="eraser"><i class="fas fa-eraser"></i></button>
        `
        list.appendChild(listBlock)
        input.value = ''
    }
    
    // document.getElementsByclass('listItem').addEventListener('click', function () {
    //     listItem.classList.add('barred')
    // })

    // document.getElementsByclass('eraser').addEventListener('click', function () {
    //     listItem.classList.add('cancel')
    //     eraser.classList.add('cancel')
    // })
})
