const container = document.querySelector("#container");

function createGrid(size) {
    container.innerHTML = "";
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });
    };
};
createGrid(16);
const resizeBtn = document.querySelector("#resizeBtn");
resizeBtn.addEventListener("click", () => {
      let size = prompt("Enter number of squares per side (max 100):");
      if (size > 100) {
        alert("Maximum is 100!");
        return;
      }
      
      createGrid(size);
});

