const container = document.querySelector('.container');
container.innerHTML = '';
// Create 16x16 grid squares
for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}