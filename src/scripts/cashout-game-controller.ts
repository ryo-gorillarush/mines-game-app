export default function () {
  const startGameButton: HTMLButtonElement =
    document.querySelector("#start-game")!;
  const cashoutGameButton: HTMLButtonElement =
    document.querySelector("#cashout-game")!;
  const betAmountInput: HTMLInputElement =
    document.querySelector("#bet-amount")!;
  const mineCountInput: HTMLInputElement =
    document.querySelector("#mine-count")!;
  const gridSizeInput: HTMLInputElement = document.querySelector("#grid-size")!;
  const gemsContainer: HTMLDivElement =
    document.querySelector("#gems-container")!;
  const nextProfitContainer: HTMLDivElement = document.querySelector(
    "#next-profit-container"
  )!;
  const totalProfitContainer: HTMLDivElement = document.querySelector(
    "#total-profit-container"
  )!;

  startGameButton.classList.remove("hidden");
  cashoutGameButton.classList.add("hidden");

  betAmountInput.disabled = false;
  mineCountInput.disabled = false;
  gridSizeInput.disabled = false;

  gemsContainer.classList.add("hidden");
  nextProfitContainer.classList.add("hidden");
  totalProfitContainer.classList.add("hidden");
}
