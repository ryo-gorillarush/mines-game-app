var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { revealGameResult } from "../server/index.js";
import revealGridTable from "./reveal-grid-table.js";
export default function (gameState) {
    return __awaiter(this, void 0, void 0, function* () {
        const resultDiv = document.querySelector(".result");
        try {
            const gameResult = yield revealGameResult();
            if (!gameResult) {
                resultDiv.textContent = "Failed to retrieve game result from server.";
                return;
            }
            const { betAmount, multiples, totalWinningAmount, uncoveredCells, minesResult, } = gameResult;
            gameState.multiples = multiples;
            gameState.uncoveredItems = uncoveredCells;
            gameState.grid = minesResult;
            const isWinning = gameState.uncoveredItems === getNumberOfSafeCells(gameState.grid);
            if (isWinning) {
                resultDiv.textContent = `Congratulations! You won ${totalWinningAmount} coins!`;
            }
            else {
                resultDiv.textContent = "Game over. You hit a mine!";
            }
            revealGridTable(gameState);
        }
        catch (error) {
            console.error("Error handling game end:", error);
            resultDiv.textContent = "An error occurred while handling game end.";
        }
    });
}
function getNumberOfSafeCells(grid) {
    let count = 0;
    grid.forEach((row) => {
        row.forEach((cell) => {
            if (!cell.isMine && cell.isRevealed) {
                count++;
            }
        });
    });
    return count;
}
//# sourceMappingURL=reveal-result.js.map