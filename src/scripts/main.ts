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
  grid: [],
  gameStarted: false,
  uncoveredItems: 0,
  multiples: 1,
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
  const initialGridTable = await startGame(gameState);

  if (initialGridTable) {
    gameState.grid = initialGridTable;
    gameState.gameStarted = true;
    gameState.uncoveredItems = 0;

    renderGridItems(gameState);
    initializeGameController(1.03, 1.0);
  }
});

/* 3. Chashout game */
cashoutGameButton.addEventListener("click", () => {
  if (gameState.gameStarted) {
    gameState.gameStarted = false;
    cashoutGameController();
  }
});
