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

  gemsDisplay.textContent = (24 - gameState.uncoveredItems).toString();
  nextProfitDisplay.textContent = (gameState.multiples * 1.03).toFixed(2);
  totalProfitDisplay.textContent = (gameState.multiples * 1.0).toFixed(2);

  startGameButton.disabled = true;
  cashoutGameButton.disabled = false;
  startGameButton.classList.remove("active");
  startGameButton.classList.add("hidden");
  cashoutGameButton.classList.remove("hidden");
}
