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
    const height = document.getElementById('s-input')
    convert(name, base, height)
}
//for rhombus
function fetchRom() {
    const name = 'Rhombus'
    const base = document.getElementById('rm-w')
    const height = document.getElementById('rm-l')
    convert(name, base, height)
}
//for pentagon
function fetchPen() {
    const name = 'Pentagon'
    const base = document.getElementById('pen-w')
    const height = document.getElementById('pen-l')
    convert(name, base, height)
}
//for ellipse
function fetchEll() {
    const name = 'Ellipse'
    const base = document.getElementById('e-w')
    const height = document.getElementById('e-l')
    convert(name, base, height)
}
// for rectangle
function fetchRec() {
    const name = 'Rectangle'
    const base = document.getElementById('r-w')
    const height = document.getElementById('r-h')
    convert(name, base, height)
}
// for parallelogram
function fetchPar() {
    const name = 'Parallelogram'
    const base = document.getElementById('p-w')
    const height = document.getElementById('p-h')
    convert(name, base, height)
}
//getting values common
function convert(name, base, height) {
    const b = parseFloat(base.value)
    const h = parseFloat(height.value)
    base.value = ' '
    height.value = ' '
    var half = 0.5
    if (name == 'Ellipse')
        half = Math.PI
    if (name == 'Parallelogram' || name == 'Rectangle')
        showRes(0, b, h, name)
    else
        showRes(half, b, h, name)
}
//showing result 
function showRes(half, b, h, name) {
    const send = document.getElementById('result')
    var ans = half * b * h
    if (ans == 0)
        ans = b * h
    const result = parseFloat(ans.toFixed(3))
    const span = document.createElement('span')
    span.innerText = 'The area of ' + name + ' is: '
    const span1 = document.createElement('span')
    span1.innerText = result
    const span2 = document.createElement('span')
    span2.innerHTML = ' cm&sup2'
    send.appendChild(span)
    send.appendChild(span1)
    send.appendChild(span2)
    span1.setAttribute('id', 'later')
}


// cm to m
function toMeter() {
    const hudai = document.getElementById('later').innerText
    const meter = parseFloat(hudai / 100)
    const final = meter.toFixed(3)
    const send = document.getElementById('result')
    const br = document.createElement('br')
    send.appendChild(br)
    const span = document.createElement('span')
    span.innerText = 'The area in meter is: '
    const span1 = document.createElement('span')
    span1.innerText = final
    const span2 = document.createElement('span')
    span2.innerHTML = ' m&sup2'
    send.appendChild(span)
    send.appendChild(span1)
    send.appendChild(span2)
    const br1 = document.createElement('br')
    send.appendChild(br1)
    const del = document.getElementById('later')
    del.removeAttribute('id')

}