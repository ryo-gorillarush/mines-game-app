export default function (gameState) {
    const nextProfitLabel = document.querySelector("label[for='next-profit']");
    const totalProfitLabel = document.querySelector("label[for='total-profit']");
    const gemsDisplay = document.querySelector("#gems");
    const nextProfitDisplay = document.querySelector("#next-profit");
    const totalProfitDisplay = document.querySelector("#total-profit");
    const startGameButton = document.querySelector("#start-game");
    const cashoutGameButton = document.querySelector("#cashout-game");
    nextProfitLabel.textContent = `Profit on Next Tile (${gameState.nextMultiply}x)`;
    totalProfitLabel.textContent = `Total Profit (${gameState.currentMultiply}x)`;
    gemsDisplay.textContent = gameState.unrevealedCount.toFixed(0);
    nextProfitDisplay.textContent = (gameState.betAmount * gameState.nextMultiply).toFixed(2);
    totalProfitDisplay.textContent = (gameState.betAmount * gameState.currentMultiply).toFixed(2);
    startGameButton.disabled = true;
    cashoutGameButton.disabled = false;
    startGameButton.classList.remove("active");
    startGameButton.classList.add("hidden");
    cashoutGameButton.classList.remove("hidden");
}
//# sourceMappingURL=update-controller-values.js.map