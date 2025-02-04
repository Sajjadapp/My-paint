// Setup canvas and context
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// Default settings
let isDrawing = false;
let brushSize = 5;
let brushColor = '#FFFFFF';
let videoFormat = '16:9';
let frameRate = 30;

// Set up canvas size
function resizeCanvas() {
    const ratio = videoFormat === '16:9' ? 16/9 : 9/16;
    const width = window.innerWidth * 0.8;
    const height = width / ratio;
    canvas.width = width;
    canvas.height = height;
}

// Drawing function
function draw(e) {
    if (!isDrawing) return;
    
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;
    
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

// Event listeners for drawing
canvas.addEventListener('mousedown', () => {
    isDrawing = true;
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.beginPath();
});
canvas.addEventListener('mouseout', () => {
    isDrawing = false;
    ctx.beginPath();
});

// Handle brush tool
document.getElementById('brushTool').addEventListener('click', () => {
    brushColor = '#FFFFFF';
    brushSize = 5;
});

// Handle eraser tool
document.getElementById('eraserTool').addEventListener('click', () => {
    brushColor = '#121212';
    brushSize = 20;
});

// Handle undo tool
document.getElementById('undoTool').addEventListener('click', () => {
    // For simplicity, we are not implementing undo here.
    alert('Undo functionality to be implemented.');
});

// Handle clear canvas
document.getElementById('clearCanvas').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Handle video format change
document.getElementById('videoFormat').addEventListener('change', (e) => {
    videoFormat = e.target.value;
    resizeCanvas();
});

// Handle frame rate change
document.getElementById('frameRate').addEventListener('input', (e) => {
    frameRate = e.target.value;
    document.getElementById('frameRateValue').innerText = frameRate;
});

// Handle export functionality (just a placeholder)
document.getElementById('exportButton').addEventListener('click', () => {
    alert('Export functionality to be implemented.');
});

// Handle sharing (just a placeholder)
document.getElementById('shareButton').addEventListener('click', () => {
    alert('Sharing functionality to be implemented.');
});

// Initialize
resizeCanvas();
