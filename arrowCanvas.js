const arrowCanvas = document.getElementById('ArrowCanvas')
const arrowCanvasRect = arrowCanvas.getBoundingClientRect()

arrowCanvas.height = 400
arrowCanvas.width = 300

const arrowCtx = arrowCanvas.getContext('2d')

let mouseArrowX = undefined
let mouseArrowY = undefined

// array of Arrow object
const arrowArray = []

class Arrow {
    constructor(x = 50, y = 50) {
        this.x = x;
        this.y = y;
        this.color = 'white';
        this.size = 5;
    }

    update(angle) {
        arrowCtx.rotate(0.5);
        arrowCtx.beginPath();
        arrowCtx.fillStyle = this.color;
        arrowCtx.moveTo(this.x, this.y)
        arrowCtx.lineTo(this.x - this.size, this.y - this.size)
        arrowCtx.lineTo(this.x, this.y - this.size * 2)
        arrowCtx.stroke();
        arrowCtx.restore();
    }

    draw(size = this.minSize) {
        arrowCtx.beginPath();
        arrowCtx.fillStyle = this.color;
        arrowCtx.moveTo(this.x, this.y)
        arrowCtx.lineTo(this.x - this.size, this.y - this.size)
        arrowCtx.lineTo(this.x, this.y - this.size * 2)
        arrowCtx.stroke()
    }
}

class arrayGrid {
    constructor(gridCanvas){
        this.x = 0
        this.y = 0
        this.gap = 30
        this.cols = Math.ceil(arrowCanvas.width / this.gap)
        this.rows = Math.ceil(arrowCanvas.height / this.gap)
        this.#createGrid()
    }

    #createGrid() {
        for (let i = 0; i < this.rows; i++) {
            this.x = 0;
            for (let j = 0; j < this.cols; j++) {
                arrowArray.push(new Arrow(this.x, this.y))
                this.x+=this.gap
            }
            this.y+=this.gap
        }
    }

    draw() {
        for (let i = 0; i < arrowArray.length; i++) {
            arrowArray[i].draw()
        }
    }
}

const newArrowGrid = new arrayGrid(arrowCanvas)
newArrowGrid.draw()

document.addEventListener('mousemove', (mouse) => {
    mouseArrowX = mouse.x - arrowCanvasRect.left
    mouseArrowY = mouse.y - arrowCanvasRect.top
});

function updateAllArrows() {
    for (let i = 0; i < arrowArray.length; i++) {
        // Calculate distance between mouse and points
        let dx = mouseArrowX - arrowArray[i].x
        let dy = mouseArrowY - arrowArray[i].y
        let rad = Math.atan2(dy, dx)
        arrowArray[i].update(rad)
    }
}

function animate1() {
    arrowCtx.fillStyle = 'rgba(255, 184, 184, 0.5)';
    // gridCtx.fillStyle = 'rgba(0,0,0,1)';
    arrowCtx.fillRect(0,0, arrowCanvas.width, arrowCanvas.height);
    updateAllArrows(); // animate
    requestAnimationFrame(animate1); 
}

animate1();