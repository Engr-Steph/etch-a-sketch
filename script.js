// Select container and button
const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resizeBtn");

// Function to generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Function to create the grid
function createGrid(size) {
    // Clear old grid
    container.innerHTML = "";

    // Calculate square size dynamically
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // Each square starts with darkness 0
        square.dataset.darkness = 0;

        // Style the square before appending
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Hover effect: random color on first hover, then darken
        square.addEventListener("mouseenter", () => {
            let currentDarkness = Number(square.dataset.darkness);

            if (currentDarkness === 0) {
                // First hover → set a random base color
                square.dataset.baseColor = getRandomColor();
                square.style.backgroundColor = square.dataset.baseColor;
                square.style.opacity = 0.1;
                square.dataset.darkness = 1;
            } else if (currentDarkness < 10) {
                // Subsequent hovers → darken same color
                currentDarkness += 1;
                square.dataset.darkness = currentDarkness;
                square.style.opacity = currentDarkness / 10;
            }
        });

        // Add square to container
        container.appendChild(square);
    }
}

// Create initial 16x16 grid
createGrid(16);

// Resize button logic
resizeBtn.addEventListener("click", () => {
    let size = Number(prompt("Enter number of squares per side (max 100):"));

    // Validate input
    if (!size || size < 1 || size > 100) {
        alert("Please enter a number between 1 and 100!");
        return;
    }

    createGrid(size);
});