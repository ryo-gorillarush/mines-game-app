export default function (gameState) {
    const gemsDisplay = document.querySelector("#gems");
    const nextProfitDisplay = document.querySelector("#next-profit");
    const totalProfitDisplay = document.querySelector("#total-profit");
    const startGameButton = document.querySelector("#start-game");
    const cashoutGameButton = document.querySelector("#cashout-game");
    gemsDisplay.textContent = (24 - gameState.unrevealedCount).toString();
    nextProfitDisplay.textContent = (gameState.betAmount * gameState.nextMultiply).toFixed(2);
    totalProfitDisplay.textContent = (gameState.betAmount * gameState.currentMultiply).toFixed(2);
    startGameButton.disabled = true;
    cashoutGameButton.disabled = false;
    startGameButton.classList.remove("active");
    startGameButton.classList.add("hidden");
    cashoutGameButton.classList.remove("hidden");
}
//# sourceMappingURL=update-controller-values.js.map