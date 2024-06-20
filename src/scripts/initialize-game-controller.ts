export default function (nextMultiple: number, currentMultiple: number) {
  const startGameButton: HTMLButtonElement =
    document.querySelector("#start-game")!;
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
  const gemsLabel: HTMLLabelElement =
    document.querySelector("label[for='gems']")!;
  const nextProfitLabel: HTMLLabelElement = document.querySelector(
    "label[for='next-profit']"
  )!;
  const totalProfitLabel: HTMLLabelElement = document.querySelector(
    "label[for='total-profit']"
  )!;

  startGameButton.classList.add("active");

  betAmountInput.disabled = true;
  mineCountInput.disabled = true;
  gridSizeInput.disabled = true;

  gemsContainer.classList.remove("hidden");
  nextProfitContainer.classList.remove("hidden");
  totalProfitContainer.classList.remove("hidden");

  gemsLabel.textContent = "Gems";
  nextProfitLabel.textContent = `Profit on Next Tile (${nextMultiple}x)`;
  totalProfitLabel.textContent = `Total Profit (${currentMultiple}x)`;
}
