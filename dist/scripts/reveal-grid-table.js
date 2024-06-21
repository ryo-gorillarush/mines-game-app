import eventListenersMap from "../stores/eventListenersStore.js";
export default function (gameState) {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((item) => {
        const itemId = item.dataset.id;
        const gridItem = gameState.gridTable
            .reduce((acc, row) => acc.concat(row), [])
            .find((item) => item.id === itemId);
        if (gridItem) {
            let cellItem = item.querySelector(".cell-item");
            if (!cellItem) {
                const cellInner = document.createElement("div");
                cellInner.classList.add("cell");
                cellItem = document.createElement("div");
                cellItem.classList.add("cell-item");
                item.appendChild(cellInner);
                cellInner.appendChild(cellItem);
            }
            cellItem.classList.remove("cell-revealed", "cell-not-revealed");
            if (gridItem.isRevealed && !gridItem.isMine) {
                cellItem.classList.add("cell-revealed");
            }
            else if (gridItem.isMine) {
                cellItem.classList.add("cell-not-revealed");
            }
            else {
                cellItem.classList.add("cell-not-revealed", "diamond-opacity");
            }
        }
        const listener = eventListenersMap.get(item);
        if (listener) {
            item.removeEventListener("click", listener);
            eventListenersMap.delete(item);
        }
    });
}
//# sourceMappingURL=reveal-grid-table.js.map