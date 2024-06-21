import { GameState } from "../types/index.js";

export default function (gameState: GameState) {
  const gemsDisplay: HTMLParagraphElement = document.querySelector("#gems")!;
  const nextProfitDisplay: HTMLParagraphElement =
    document.querySelector("#next-profit")!;
  const totalProfitDisplay: HTMLParagraphElement =
    document.querySelector("#total-profit")!;
  const startGameButton: HTMLButtonElement =
    document.querySelector("#start-game")!;
  const cashoutGameButton: HTMLButtonElement =
    document.querySelector("#cashout-game")!;

  gemsDisplay.textContent = (24 - gameState.unrevealedCount).toString();
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
