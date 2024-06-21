export default function () {
    const startGameButton = document.querySelector("#start-game");
    const cashoutGameButton = document.querySelector("#cashout-game");
    const betAmountInput = document.querySelector("#bet-amount");
    const mineCountInput = document.querySelector("#mine-count");
    const gridSizeInput = document.querySelector("#grid-size");
    const gemsContainer = document.querySelector("#gems-container");
    const nextProfitContainer = document.querySelector("#next-profit-container");
    const totalProfitContainer = document.querySelector("#total-profit-container");
    startGameButton.classList.remove("hidden");
    cashoutGameButton.classList.add("hidden");
    startGameButton.disabled = false;
    cashoutGameButton.disabled = true;
    betAmountInput.disabled = false;
    mineCountInput.disabled = false;
    gridSizeInput.disabled = false;
    gemsContainer.classList.add("hidden");
    nextProfitContainer.classList.add("hidden");
    totalProfitContainer.classList.add("hidden");
}
//# sourceMappingURL=cashout-game-controller.js.map