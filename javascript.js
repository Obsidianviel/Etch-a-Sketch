document.addEventListener("DOMContentLoaded", function() {
    const GRIDSIDE = 600;
    const rows = 16;
    const columns = 16;

    const sketchArea = document.querySelector(".board");
    sketchArea.style.width = `${GRIDSIDE}px`;
    sketchArea.style.height = `${GRIDSIDE}px`;

    function createGridCells() {
        const cellSize = GRIDSIDE / columns;

        for (let i = 0; i < rows * columns; i++) {
            const gridCell = document.createElement("div");

            gridCell.style.width = `${cellSize}px`;
            gridCell.style.height = `${cellSize}px`;
            gridCell.classList.add("cell");

            sketchArea.appendChild(gridCell);
            gridCell.addEventListener("mouseover", changeBackgroundColor);
        }
    }

    function changeBackgroundColor() {
        this.style.backgroundColor = "black";
    }

    createGridCells();
});
