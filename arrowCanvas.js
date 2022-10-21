const arrowCanvas = document.getElementById('ArrowCanvas')
const arrowCanvasRect = arrowCanvas.getBoundingClientRect()

arrowCanvas.height = 400
arrowCanvas.width = 300

const arrowCtx = arrowCanvas.getContext('2d')

let mousex = undefined
let mousey = undefined

const arrowArray = []

class Arrow {
    constructor(x = 50, y = 50) {
        this.x = x;
        this.y = y;
        this.color = 'white';
        this.size = 5;
    }

    // update(size) {
    //     if (size < this.minSize) {
    //         this.currSize = this.minSize;
    //     } else {
    //         this.currSize = size;
    //     }
    //     gridCtx.beginPath();
    //     gridCtx.fillStyle = this.color;
    //     gridCtx.arc(this.x, this.y, this.currSize, 0, Math.PI*2);
    //     gridCtx.fill();
    // }

    draw(size = this.minSize) {
        arrowCtx.beginPath();
        arrowCtx.fillStyle = this.color;
        arrowCtx.moveTo(this.x, this.y)
        arrowCtx.lineTo(this.x - this.size, this.y - this.size)
        arrowCtx.lineTo(this.x, this.y - this.size)
        arrowCtx.stroke()
    }
}

class arrayGrid {
    constructor(gridCanvas){
        this.x = 0;
        this.y = 0;
        this.gap = 30;
        this.cols = Math.ceil(arrowCanvas.width / this.gap);
        this.rows = Math.ceil(arrowCanvas.height / this.gap); 
        this.#createGrid();
    }

    #createGrid() {
        for (let i = 0; i < this.rows; i++) {
            this.x = 0;
            for (let j = 0; j < this.cols; j++) {
                arrowArray.push(new Arrow(this.x, this.y));
                this.x+=this.gap;
            }
            this.y+=this.gap;
        }
    }

    draw() {
        for (let i = 0; i < arrowArray.length; i++) {
            arrowArray[i].draw();
        }
    }
}

const newArrowGrid = new arrayGrid(arrowCanvas);
newArrowGrid.draw();