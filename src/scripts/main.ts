import loadGame from "../server/load-game.js";
import startGame from "../server/start-game.js";
import renderGridItems from "./render-grid-items.js";
import cashoutGameController from "./cashout-game-controller.js";
import initializeGameController from "./initialize-game-controller.js";
import type { GameState } from "../types/index.js";

const startGameButton: HTMLButtonElement =
  document.querySelector("#start-game")!;
const cashoutGameButton: HTMLButtonElement =
  document.querySelector("#cashout-game")!;
const resultDiv: HTMLDivElement = document.querySelector(".result")!;

const gameState: GameState = {
  gridTable: [],
  gameStarted: false,
  betAmount: 0,
  mineCount: 1,
  gridSize: 5,
  unrevealedCount: 0,
  currentMultiply: 1,
  nextMultiply: 1,
};

/* 1. Grid Template is loaded */
document.addEventListener("DOMContentLoaded", () => {
  loadGame().catch((error) => {
    console.error("Failed to start the game:", error);
    resultDiv.textContent = "Failed to start the game. Please try again later.";
  });
});

/* 2. Start game */
startGameButton.addEventListener("click", async () => {
  const initialGameState = await startGame(gameState);

  if (initialGameState) {
    Object.assign(gameState, initialGameState);
    renderGridItems(initialGameState);
    initializeGameController(
      initialGameState.nextMultiply,
      initialGameState.currentMultiply
    );
  }
});

/* 3. Chashout game */
cashoutGameButton.addEventListener("click", () => {
  if (gameState.gameStarted) {
    gameState.gameStarted = false;
    cashoutGameController();
  }
});
