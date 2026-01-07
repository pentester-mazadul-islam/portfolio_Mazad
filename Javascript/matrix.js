const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

const letters = "01";
const fontSize = 16;
let columns;
let drops;

// This function calculates how many 0/1 columns fit on the current screen
function setupMatrix() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = canvas.width / fontSize;
    drops = Array(Math.floor(columns)).fill(1);
}

// Run setup on load and whenever the window is resized
setupMatrix();
window.addEventListener('resize', setupMatrix);

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "rgba(47, 65, 47, 1)";
    ctx.font = fontSize + "px monospace";
    
    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Reset drop if it hits the bottom of the screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 35);