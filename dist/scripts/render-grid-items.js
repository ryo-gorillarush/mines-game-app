import handleItemClick from "./handleItemClick.js";
import eventListenersMap from "../stores/eventListenersStore.js";
export default function (gameState) {
    const gridWrapper = document.querySelector(".grids-wrapper");
    gridWrapper.innerHTML = "";
    for (let row = 0; row < gameState.gridTable.length; row++) {
        for (let col = 0; col < gameState.gridTable.length; col++) {
            const cell = document.createElement("button");
            cell.classList.add("grid-item");
            cell.dataset.id = gameState.gridTable[row][col].id;
            const listener = (event) => handleItemClick(event, gameState);
            cell.addEventListener("click", listener);
            eventListenersMap.set(cell, listener);
            gridWrapper.appendChild(cell);
        }
    }
}
//# sourceMappingURL=render-grid-items.js.map