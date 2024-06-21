export default function (gameState) {
    const startGameButton = document.querySelector("#start-game");
    const betAmountInput = document.querySelector("#bet-amount");
    const mineCountInput = document.querySelector("#mine-count");
    const gridSizeInput = document.querySelector("#grid-size");
    const gemsContainer = document.querySelector("#gems-container");
    const nextProfitContainer = document.querySelector("#next-profit-container");
    const totalProfitContainer = document.querySelector("#total-profit-container");
    const gemsLabel = document.querySelector("label[for='gems']");
    const nextProfitLabel = document.querySelector("label[for='next-profit']");
    const totalProfitLabel = document.querySelector("label[for='total-profit']");
    const gemsDisplay = document.querySelector("#gems");
    const nextProfitDisplay = document.querySelector("#next-profit");
    const totalProfitDisplay = document.querySelector("#total-profit");
    startGameButton.classList.add("active");
    betAmountInput.disabled = true;
    mineCountInput.disabled = true;
    gridSizeInput.disabled = true;
    gemsContainer.classList.remove("hidden");
    nextProfitContainer.classList.remove("hidden");
    totalProfitContainer.classList.remove("hidden");
    gemsLabel.textContent = "Gems";
    nextProfitLabel.textContent = `Profit on Next Tile (${gameState.nextMultiply}x)`;
    totalProfitLabel.textContent = `Total Profit (${gameState.currentMultiply}x)`;
    gemsDisplay.textContent = gameState.unrevealedCount.toFixed(0);
    nextProfitDisplay.textContent = (gameState.betAmount * gameState.nextMultiply).toFixed(2);
    totalProfitDisplay.textContent = (gameState.betAmount * gameState.currentMultiply).toFixed(2);
}
//# sourceMappingURL=initialize-game-controller.js.map