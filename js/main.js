console.log('connected')

document.getElementById('change').addEventListener('mouseover', function () {
    document.getElementById('change').style.backgroundColor = 'pink'
})
document.getElementById('change').addEventListener('mouseout', function () {
    document.getElementById('change').style.backgroundColor = ''
})
// for triangle
function fetchRes() {
    const name = 'Triangle'
    const base = document.getElementById('f-input')
    const b = parseFloat(base.value)
    const height = document.getElementById('s-input')
    const h = parseFloat(height.value)
    base.value = ' '
    height.value = ' '
    const half = 0.5
    showRes(half, b, h, name)
}
//for rhombus
function fetchRom() {
    const name = 'Rhombus'
    const base = document.getElementById('rm-w')
    const b = parseFloat(base.value)
    const height = document.getElementById('rm-l')
    const h = parseFloat(height.value)
    base.value = ' '
    height.value = ' '
    const half = 0.5
    showRes(half, b, h, name)
}
//for pentagon
function fetchPen() {
    const name = 'Pentagon'
    const base = document.getElementById('pen-w')
    const b = parseFloat(base.value)
    const height = document.getElementById('pen-l')
    const h = parseFloat(height.value)
    base.value = ' '
    height.value = ' '
    const half = 0.5
    showRes(half, b, h, name)
}
//for ellipse
function fetchEll() {
    const name = 'Pentagon'
    const base = document.getElementById('e-w')
    const b = parseFloat(base.value)
    const height = document.getElementById('e-l')
    const h = parseFloat(height.value)
    base.value = ' '
    height.value = ' '
    const half = Math.PI
    showRes(half, b, h, name)
}
function showRes(half, b, h, name) {
    const send = document.getElementById('result')
    const ans = half * b * h
    const result = parseFloat(ans.toFixed(3))
    const li = document.createElement('li')
    li.innerText = 'The area of ' + name + ' is: ' + result
    send.appendChild(li)
}
// for rectangle
function fetchRec() {
    const name = 'Rectangle'
    const base = document.getElementById('r-w')
    const b = parseFloat(base.value)
    const height = document.getElementById('r-h')
    const h = parseFloat(height.value)
    base.value = ' '
    height.value = ' '
    showResult(b, h, name)
}
// for parallelogram
function fetchPar() {
    const name = 'Parallelogram'
    const base = document.getElementById('p-w')
    const b = parseFloat(base.value)
    const height = document.getElementById('p-h')
    const h = parseFloat(height.value)
    base.value = ' '
    height.value = ' '
    showResult(b, h, name)
}
function showResult(b, h, name) {
    const send = document.getElementById('result')
    const ans = b * h
    const result = parseFloat(ans.toFixed(3))
    const li = document.createElement('li')
    li.innerText = 'The area of ' + name + ' is: ' + result
    send.appendChild(li)
}

