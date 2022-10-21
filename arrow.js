const arrowCanvas = document.getElementById('ArrowCanvas')
const arrowCanvasRect = arrowCanvas.getBoundingClientRect()

let gap = 30
let cols = Math.ceil(arrowCanvasRect.width / gap);
let rows = Math.ceil(arrowCanvasRect.height / gap);

let grid = ''
for (let i=0; i<rows; i++) {
    let row = ''
    for (let j=0; j<cols; j++) {
        row += '<i class="fa-solid fa-chevron-left"></i>'
    }
    grid += `<div>${row}</div>`
}
arrowCanvas.innerHTML = `<div class="background">${grid}</div>`


