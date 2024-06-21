var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initializeGame } from "./index.js";
export default function (gameState) {
    return __awaiter(this, void 0, void 0, function* () {
        const resultDiv = document.querySelector(".result");
        const betAmountInput = document.querySelector("#bet-amount");
        const mineCountInput = document.querySelector("#mine-count");
        const gridSizeInput = document.querySelector("#grid-size");
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
            const initialGameState = yield initializeGame(betAmount, mineCount, gridSize);
            if (initialGameState) {
                resultDiv.textContent = "";
                return initialGameState;
            }
            else {
                resultDiv.textContent = "Failed to initialize the game.";
                return null;
            }
        }
        catch (error) {
            console.error("Error initializing the game:", error);
            resultDiv.textContent = "Failed to initialize the game.";
            return null;
        }
    });
}
//# sourceMappingURL=start-game.js.map