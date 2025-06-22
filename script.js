const display = document.querySelector('#display')


const buttons = document.querySelectorAll('button')

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = ''
        }
        else if (item.id == 'backspace') {
            let string = display.innerText.toString()
            display.innerText = string.substring(0, string.length - 1)
        }
        else if (display.innerText != '' && item.id == 'equals') {
            display.innerText = eval(display.innerText)
        }

        else if (display.innerText == '' && item.id == 'equals') {
            display.style.justifyContent = 'flex-start'
            display.innerText = 'Empty!'
            setTimeout(() => {
                display.innerText = '';
                display.style.justifyContent = 'flex-end'
            }, 2000)
        }
        else {
            display.innerText += item.id
        }


    }
})