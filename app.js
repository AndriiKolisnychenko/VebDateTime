let mode = 'default'
const text = 'Choose parameter'
const output = document.getElementById('output')
const dateBtn = document.getElementById('dateBtn')
const timeBtn = document.getElementById('timeBtn')

dateBtn.onclick = function () {
    mode = (mode === 'date') ? 'default' : 'date'
    update()
}

timeBtn.onclick = function () {
    mode = (mode === 'time') ? 'default' : 'time'
    update()
}

setInterval(update, 10)
update()

function update() {
    output.textContent = format(mode)
}

function format(formatMode) {
    const now = new Date()

    switch (formatMode) {
        case 'time':
            return now.toLocaleTimeString() + ':' + now.getMilliseconds()
        case 'date':
            return now.toLocaleDateString()
        default:
            return text
    }
}