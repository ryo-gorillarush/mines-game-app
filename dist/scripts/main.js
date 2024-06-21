var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import loadGame from "../server/load-game.js";
import startGame from "../server/start-game.js";
import cashoutGame from "../server/cashout-game.js";
import renderGridItems from "./render-grid-items.js";
import controlResultOverlay from "./control-result-overlay.js";
import initializeGameController from "./initialize-game-controller.js";
const startGameButton = document.querySelector("#start-game");
const cashoutGameButton = document.querySelector("#cashout-game");
const resultDiv = document.querySelector(".result");
const defaultGameState = {
    gridTable: [],
    gameStarted: false,
    betAmount: 0,
    mineCount: 1,
    gridSize: 5,
    unrevealedCount: 0,
    currentMultiply: 1,
    nextMultiply: 1,
};
const gameState = Object.assign({}, defaultGameState);
/* 1. Grid Template is loaded */
document.addEventListener("DOMContentLoaded", () => {
    loadGame().catch((error) => {
        console.error("Failed to start the game:", error);
        resultDiv.textContent = "Failed to start the game. Please try again later.";
    });
});
/* 2. Start game */
startGameButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    Object.assign(gameState, defaultGameState);
    controlResultOverlay(0, 0, true);
    const initialGameState = yield startGame(gameState);
    if (initialGameState) {
        Object.assign(gameState, initialGameState);
        renderGridItems(initialGameState);
        initializeGameController(gameState);
    }
}));
/* 3. Chashout game */
cashoutGameButton.addEventListener("click", () => {
    if (gameState.gameStarted)
        cashoutGame(gameState).catch((error) => {
            console.error("Failed to cashout:", error);
            resultDiv.textContent =
                "Failed to cashout the game. Please try again later.";
        });
});
//# sourceMappingURL=main.js.map