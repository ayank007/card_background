const arrowCanvas = document.getElementById('ArrowCanvas')
const arrowCanvasRect = arrowCanvas.getBoundingClientRect()

let gap = 30
let cols = Math.ceil(arrowCanvasRect.width / gap);
let rows = Math.ceil(arrowCanvasRect.height / gap);

let grid = ''
for (let i=0; i<rows; i++) {
    let row = ''
    for (let j=0; j<cols; j++) {
        row += '<i class="fa-solid fa-chevron-left arrow"></i>'
    }
    grid += `<div>${row}</div>`
}
arrowCanvas.innerHTML = `<div class="background">${grid}</div>`

function angle(cx, cy, ex, ey) {
    const dy = ey - cy
    const dx = ex - cx
    const rad = Math.atan2(dy, dx)
    const deg = rad * 180 / Math.PI
    return deg
}

// defining anchor 
// const anchor = document.getElementById('anchor')
const anchorRekt = arrowCanvas.getBoundingClientRect()
const anchorX = anchorRekt.left + anchorRekt.width / 2
const anchorY = anchorRekt.top + anchorRekt.height / 2

const arrows = document.querySelectorAll('.arrow')

document.addEventListener('mousemove', e => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)

    arrows.forEach(arrow => {
        arrow.style.transform = `rotate(${90 + angleDeg}deg)`
    })
})