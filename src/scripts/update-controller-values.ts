import { GameState } from "../types/index.js";

export default function (gameState: GameState) {
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
  const startGameButton: HTMLButtonElement =
    document.querySelector("#start-game")!;
  const cashoutGameButton: HTMLButtonElement =
    document.querySelector("#cashout-game")!;

  nextProfitLabel.textContent = `Profit on Next Tile (${gameState.nextMultiply}x)`;
  totalProfitLabel.textContent = `Total Profit (${gameState.currentMultiply}x)`;

  gemsDisplay.textContent = gameState.unrevealedCount.toFixed(0);
  nextProfitDisplay.textContent = (
    gameState.betAmount * gameState.nextMultiply
  ).toFixed(2);
  totalProfitDisplay.textContent = (
    gameState.betAmount * gameState.currentMultiply
  ).toFixed(2);

  startGameButton.disabled = true;
  cashoutGameButton.disabled = false;
  startGameButton.classList.remove("active");
  startGameButton.classList.add("hidden");
  cashoutGameButton.classList.remove("hidden");
}
