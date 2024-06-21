import cashoutGameController from "../scripts/cashout-game-controller.js";
import controlResultOverlay from "../scripts/control-result-overlay.js";
import { GameState } from "../types/index.js";
import { cashout } from "./index.js";

export default async function (gameState: GameState) {
  const resultDiv: HTMLDivElement = document.querySelector(".result")!;
  try {
    const finalResult = await cashout();

    if (finalResult) {
      gameState.gameStarted = false;
      resultDiv.textContent = "";
      controlResultOverlay(
        finalResult.totalWinningAmount,
        finalResult.currentMultiply
      );
      cashoutGameController();
    } else throw new Error();
  } catch (error) {
    console.error("Error cashout", error);
    resultDiv.textContent = "Failed to cashout.";
    return null;
  }
}
