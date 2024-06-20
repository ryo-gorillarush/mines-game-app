export default function () {
    const startGameButton = document.querySelector("#start-game");
    const gemsContainer = document.querySelector("#gems-container");
    const nextProfitContainer = document.querySelector("#next-profit-container");
    const totalProfitContainer = document.querySelector("#total-profit-container");
    const betAmountInput = document.querySelector("#bet-amount");
    const mineCountInput = document.querySelector("#mine-count");
    const gridSizeInput = document.querySelector("#grid-size");
    startGameButton.classList.add("active");
    startGameButton.textContent = "Cashout";
    betAmountInput.disabled = true;
    mineCountInput.disabled = true;
    gridSizeInput.disabled = true;
    gemsContainer.classList.remove("hidden");
    nextProfitContainer.classList.remove("hidden");
    totalProfitContainer.classList.remove("hidden");
}
//# sourceMappingURL=game-controller.js.map