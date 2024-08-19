document.addEventListener("DOMContentLoaded", function() {
    const GRIDSIDE = 600;
    const slider = document.querySelector("#slider");
    const sliderValue = document.querySelector("#slider-value");
    const sketchArea = document.querySelector(".board");
    const resetButton = document.querySelector("#reset-button");

    sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;
    sketchArea.style.width = `${GRIDSIDE}px`;
    sketchArea.style.height = `${GRIDSIDE}px`;

    function createGridCells(squares) {
        const cellSize = GRIDSIDE / squares;
        const numOfSquares = squares * squares;

        for (let i = 0; i < numOfSquares; i++) {
            const gridCell = document.createElement("div");
            const widthOrHeight = `${cellSize}px`;

            gridCell.style.width = gridCell.style.height = widthOrHeight;
            gridCell.classList.add("cell");

            sketchArea.appendChild(gridCell);
            gridCell.addEventListener("mouseover", changeBackgroundColor);
        }
    }

    function changeBackgroundColor() {
        this.style.backgroundColor = "black";
    }

    function removeGridCells() {
        while (sketchArea.firstChild) {
            sketchArea.removeChild(sketchArea.firstChild);
        }
    }

    // Event listener for slider input to update the grid dynamically
    slider.addEventListener("input", function() {
        sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;
        removeGridCells(); // Remove existing cells
        createGridCells(slider.value); // Create new grid based on slider value
    });

    // Initial grid creation
    createGridCells(slider.value);

    // Event listener for reset button
    resetButton.addEventListener("click", function() {
        slider.value = 16; // Reset slider value
        slider.dispatchEvent(new Event('input')); // Trigger the input event to update the grid
    });
});
