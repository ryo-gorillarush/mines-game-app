import handleItemClick from "./handleItemClick.js";
export default function (gameState) {
    /* TODO: this should come from backend */
    const betAmount = 1;
    const resultDiv = document.querySelector(".result");
    const isWinning = gameState.uncoveredItems === getNumberOfSafeCells(gameState.grid);
    if (isWinning) {
        // Calculate winning price
        const winningAmount = betAmount * gameState.multiples;
        resultDiv.textContent = `Congratulations! You won ${winningAmount} coins!`;
    }
    else {
        resultDiv.textContent = "Game over. You hit a mine!";
    }
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach((item) => {
        item.removeEventListener("click", () => handleItemClick);
    });
}
function getNumberOfSafeCells(grid) {
    let count = 0;
    grid.forEach((row) => {
        row.forEach((cell) => {
            if (!cell.isMine && cell.isRevealed) {
                count++;
            }
        });
    });
    return count;
}
//# sourceMappingURL=end-game.js.map