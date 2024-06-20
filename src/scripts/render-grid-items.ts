import type { GameState } from "../types/index.js";
import handleItemClick from "./handleItemClick.js";
import eventListenersMap from "../stores/eventListenersStore.js";

export default function (gameState: GameState) {
  const gridWrapper: HTMLDivElement = document.querySelector(".grids-wrapper")!;
  gridWrapper.innerHTML = "";

  for (let row = 0; row < gameState.grid.length; row++) {
    for (let col = 0; col < gameState.grid.length; col++) {
      const cell = document.createElement("button");
      cell.classList.add("grid-item");
      cell.dataset.id = gameState.grid[row][col].id;

      const listener = (event: Event) => handleItemClick(event, gameState);
      cell.addEventListener("click", listener);

      eventListenersMap.set(cell, listener);

      gridWrapper.appendChild(cell);
    }
  }
}
