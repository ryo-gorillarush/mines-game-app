export default function (gridSize) {
    const gridWrapper = document.querySelector(".grids-wrapper");
    gridWrapper.innerHTML = "";
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const cell = document.createElement("button");
            cell.classList.add("grid-item");
            cell.dataset.row = row.toString();
            cell.dataset.col = col.toString();
            // cell.addEventListener("click", handleCellClick);
            gridWrapper.appendChild(cell);
        }
    }
}
//# sourceMappingURL=render-grid.js.map