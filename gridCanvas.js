const gridCanvas = document.getElementById('GridCanvas');

gridCanvas.height = 400;
gridCanvas.width = 300;
const gridCanvasRect = gridCanvas.getBoundingClientRect()
const gridCanvasTop = gridCanvasRect.top + window.pageYOffset

const gridCtx = gridCanvas.getContext('2d');

let mouseDotX = undefined;
let mouseDotY = undefined;

let particlesArray = [];

// document.addEventListener('resize', () => {
//     gridCanvas.height = window.innerHeight;
//     gridCanvas.width = window.innerWidth;
// });

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.color = 'white';
        this.minSize = 1;
        this.maxSize = 8;
        this.currSize = 1;
    }

    update(size){
        if(size<this.minSize){
            this.currSize = this.minSize;
        }else{
            this.currSize = size;
        }
        gridCtx.beginPath();
        gridCtx.fillStyle = this.color;
        gridCtx.arc(this.x, this.y, this.currSize, 0, Math.PI*2);
        gridCtx.fill();
    }

    draw(size = this.minSize){
        gridCtx.beginPath();
        gridCtx.fillStyle = this.color;
        gridCtx.arc(this.x, this.y, this.minSize, 0, Math.PI*2);
        gridCtx.fill();
    }
}

class Grid{
    constructor(gridCanvas){
        this.x = 0;
        this.y = 0;
        this.gap = 20;
        this.cols = Math.ceil(gridCanvas.width / this.gap);
        this.rows = Math.ceil(gridCanvas.height / this.gap); 
        this.#createGrid();
    }

    #createGrid(){
        for (let i = 0; i < this.rows; i++) {
            this.x = 0;
            for (let j = 0; j < this.cols; j++) {
                particlesArray.push(new Point(this.x, this.y));
                this.x+=this.gap;
            }
            this.y+=this.gap;
        }
    }

    draw(){
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].draw();
        }
    }
}

const newDotGrid = new Grid(gridCanvas);
newDotGrid.draw();

document.addEventListener('mousemove', (mouse) => {
    mouseDotX = mouse.x - gridCanvasRect.left
    mouseDotY = mouse.y - gridCanvasTop
});

function updateall(){
    for (let i = 0; i < particlesArray.length; i++) {
        // Calculate distance between mouse and points
        x_diff = mouseDotX - particlesArray[i].x;
        y_diff = mouseDotY - particlesArray[i].y;
        dist = Math.sqrt(x_diff*x_diff + y_diff*y_diff);
        if(dist<300){
            particlesArray[i].update(8-(dist/20));
        }else{
            particlesArray[i].update(1);
        }
    }
}

function animate(){
    gridCtx.fillStyle = 'rgba(27, 182, 209, 0.5)';
    // gridCtx.fillStyle = 'rgba(0,0,0,1)';
    gridCtx.fillRect(0,0, gridCanvas.width, gridCanvas.height);
    updateall(); // animate
    requestAnimationFrame(animate); 
}

animate();