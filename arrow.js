const ArrowCanvas2 = document.getElementById('ArrowCanvas2')
const ArrowCanvas2Rect = ArrowCanvas2.getBoundingClientRect()

let gap = 40
let cols = Math.ceil(ArrowCanvas2Rect.width / gap);
let rows = Math.ceil(ArrowCanvas2Rect.height / gap);

let grid = ''
for (let i=0; i<rows; i++) {
    let row = ''
    for (let j=0; j<cols; j++) {
        row += '<div class="arrow"><i class="fa-solid fa-chevron-left"></i></div>'
    }
    grid += `<div>${row}</div>`
}
ArrowCanvas2.innerHTML = grid

function angle(cx, cy, ex, ey) {
    const dy = ey - cy
    const dx = ex - cx
    const rad = Math.atan2(dy, dx)
    const deg = rad * 180 / Math.PI
    return deg
}

// defining anchor 
// const anchor = document.getElementById('anchor')

const arrows = document.querySelectorAll('.arrow')

let mouseX = undefined
let mouseY = undefined

document.addEventListener('mousemove', e => {
    mouseX = e.clientX
    mouseY = e.clientY

    arrows.forEach(arrow => {
        const arrowRekt = arrow.getBoundingClientRect()
        const anchorX = arrowRekt.left + arrowRekt.width / 2
        const anchorY = arrowRekt.top + arrowRekt.height / 2
        const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)
        arrow.style.transform = `rotate(${angleDeg}deg)`
    })
})