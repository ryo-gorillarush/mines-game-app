import { GridItem } from "../types/index.js";

export function createGridTable(templateGrid: GridItem[][]) {
  const gridWrapper: HTMLDivElement | null =
    document.querySelector(".grids-wrapper");

  if (gridWrapper) {
    gridWrapper.innerHTML = "";

    for (let row = 0; row < templateGrid.length; row++) {
      for (let col = 0; col < templateGrid[row].length; col++) {
        const cell = document.createElement("button");
        cell.classList.add("grid-item");
        cell.dataset.row = row.toString();
        cell.dataset.col = col.toString();
        cell.dataset.id = templateGrid[row][col].id;
        gridWrapper.appendChild(cell);
      }
    }
  }
}
