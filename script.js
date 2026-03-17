const container = document.querySelector("#container");

function createGrid(size) {
    for (let i = 0; i < size * size; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);

        square.addEventListener("mouseenter", ()=>{
            square.style.backgroundColor = "black";
        });
    };
};
createGrid(16);
