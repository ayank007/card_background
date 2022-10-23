const arrowCanvas = document.getElementById('ArrowCanvas')
const arrowCanvasRect = arrowCanvas.getBoundingClientRect()

arrowCanvas.height = 400
arrowCanvas.width = 300

const arrowCtx = arrowCanvas.getContext('2d')

let mouseArrowX = undefined
let mouseArrowY = undefined

// array of Arrow object
const arrowArray = []