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
import renderGridItems from "./render-grid-items.js";
import cashoutGameController from "./cashout-game-controller.js";
import initializeGameController from "./initialize-game-controller.js";
const startGameButton = document.querySelector("#start-game");
const cashoutGameButton = document.querySelector("#cashout-game");
const resultDiv = document.querySelector(".result");
const gameState = {
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
startGameButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const initialGridTable = yield startGame(gameState);
    if (initialGridTable) {
        gameState.grid = initialGridTable;
        gameState.gameStarted = true;
        gameState.uncoveredItems = 0;
        renderGridItems(gameState);
        initializeGameController(1.03, 1.0);
    }
}));
/* 3. Chashout game */
cashoutGameButton.addEventListener("click", () => {
    if (gameState.gameStarted) {
        gameState.gameStarted = false;
        cashoutGameController();
    }
});
//# sourceMappingURL=main.js.map