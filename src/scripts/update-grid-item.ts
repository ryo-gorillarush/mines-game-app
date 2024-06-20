import revealResult from "./reveal-result.js";
import type { GameState, GridItem } from "../types/index.js";
import eventListenersMap from "../stores/eventListenersStore.js";

export default function (
  element: HTMLButtonElement,
  updatedGridItem: GridItem,
  gameState: GameState
) {
  const cellInner = document.createElement("div");
  cellInner.classList.add("cell");

  const cellItem = document.createElement("div");
  cellItem.classList.add("cell-item");

  if (updatedGridItem.isMine) {
    cellItem.classList.add("mine");
    revealResult(gameState);
  } else {
    cellInner.classList.add("cell-revealed");
    cellItem.classList.add("diamond");

    const outline = document.createElement("div");
    outline.classList.add("outline");
    cellInner.appendChild(outline);
  }
  element.appendChild(cellInner);
  cellInner.appendChild(cellItem);

  const listener = eventListenersMap.get(element);
  if (listener) {
    element.removeEventListener("click", listener);
    eventListenersMap.delete(element);
  }
}
