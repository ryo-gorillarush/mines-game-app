import type { GameState } from "../types/index.js";

export default function (gameState: GameState) {
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
  const gemsDisplay: HTMLParagraphElement = document.querySelector("#gems")!;
  const nextProfitDisplay: HTMLParagraphElement =
    document.querySelector("#next-profit")!;
  const totalProfitDisplay: HTMLParagraphElement =
    document.querySelector("#total-profit")!;

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
  nextProfitDisplay.textContent = (
    gameState.betAmount * gameState.nextMultiply
  ).toFixed(2);
  totalProfitDisplay.textContent = (
    gameState.betAmount * gameState.currentMultiply
  ).toFixed(2);
}
