export default function (gameState) {
    const gemsDisplay = document.querySelector("#gems");
    const nextProfitDisplay = document.querySelector("#next-profit");
    const totalProfitDisplay = document.querySelector("#total-profit");
    const startGameButton = document.querySelector("#start-game");
    const cashoutGameButton = document.querySelector("#cashout-game");
    gemsDisplay.textContent = (24 - gameState.uncoveredItems).toString();
    nextProfitDisplay.textContent = (gameState.multiples * 1.03).toFixed(2);
    totalProfitDisplay.textContent = (gameState.multiples * 1.0).toFixed(2);
    startGameButton.disabled = true;
    cashoutGameButton.disabled = false;
    startGameButton.classList.remove("active");
    startGameButton.classList.add("hidden");
    cashoutGameButton.classList.remove("hidden");
}
//# sourceMappingURL=update-controller-values.js.map