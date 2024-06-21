import loadGame from "../server/load-game.js";
import startGame from "../server/start-game.js";
import cashoutGame from "../server/cashout-game.js";
import renderGridItems from "./render-grid-items.js";
import controlResultOverlay from "./control-result-overlay.js";
import initializeGameController from "./initialize-game-controller.js";
import type { GameState } from "../types/index.js";

const startGameButton: HTMLButtonElement =
  document.querySelector("#start-game")!;
const cashoutGameButton: HTMLButtonElement =
  document.querySelector("#cashout-game")!;
const resultDiv: HTMLDivElement = document.querySelector(".result")!;

const defaultGameState: GameState = {
  gridTable: [],
  gameStarted: false,
  betAmount: 0,
  mineCount: 1,
  gridSize: 5,
  unrevealedCount: 0,
  currentMultiply: 1,
  nextMultiply: 1,
};

const gameState: GameState = { ...defaultGameState };

/* 1. Grid Template is loaded */
document.addEventListener("DOMContentLoaded", () => {
  loadGame().catch((error) => {
    console.error("Failed to start the game:", error);
    resultDiv.textContent = "Failed to start the game. Please try again later.";
  });
});

/* 2. Start game */
startGameButton.addEventListener("click", async () => {
  Object.assign(gameState, defaultGameState);
  controlResultOverlay(0, 0, true);

  const initialGameState = await startGame(gameState);

  if (initialGameState) {
    Object.assign(gameState, initialGameState);
    renderGridItems(initialGameState);
    initializeGameController(gameState);
  }
});

/* 3. Chashout game */
cashoutGameButton.addEventListener("click", () => {
  if (gameState.gameStarted)
    cashoutGame(gameState).catch((error) => {
      console.error("Failed to cashout:", error);
      resultDiv.textContent =
        "Failed to cashout the game. Please try again later.";
    });
});
