import { initializeGame } from "./index.js";
import type { GameState } from "../types/index.js";

export default async function (
  gameState: GameState
): Promise<GameState | null> {
  const resultDiv: HTMLDivElement = document.querySelector(".result")!;
  const betAmountInput: HTMLInputElement =
    document.querySelector("#bet-amount")!;
  const mineCountInput: HTMLInputElement =
    document.querySelector("#mine-count")!;
  const gridSizeInput: HTMLInputElement = document.querySelector("#grid-size")!;

  const betAmount = parseInt(betAmountInput.value, 10);
  const mineCount = parseInt(mineCountInput.value, 10);
  const gridSize = parseInt(gridSizeInput.value, 10);

  if (betAmount < 1 || mineCount < 1 || mineCount > gridSize * gridSize - 1) {
    resultDiv.textContent = "Invalid bet amount or mine count.";
    return null;
  }

  if (gameState.gameStarted) {
    resultDiv.textContent = "Game is already in progress.";
    return null;
  }

  try {
    const initialGameState = await initializeGame(
      betAmount,
      mineCount,
      gridSize
    );

    if (initialGameState) {
      resultDiv.textContent = "";
      return initialGameState;
    } else {
      resultDiv.textContent = "Failed to initialize the game.";
      return null;
    }
  } catch (error) {
    console.error("Error initializing the game:", error);
    resultDiv.textContent = "Failed to initialize the game.";
    return null;
  }
}
