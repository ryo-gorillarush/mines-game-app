import { revealGameResult } from "../server/index.js";
import revealGridTable from "./reveal-grid-table.js";
import type { GameState, GridItem } from "../types/index.js";

export default async function (gameState: GameState) {
  const resultDiv: HTMLDivElement = document.querySelector(".result")!;

  try {
    const gameResult = await revealGameResult();
    if (!gameResult) {
      resultDiv.textContent = "Failed to retrieve game result from server.";
      return;
    }

    const {
      resultTable,
      gameStarted,
      betAmount,
      totalWinningAmount,
      unrevealedCount,
      currentMultiply,
    } = gameResult;

    gameState.gridTable = resultTable;
    gameState.gameStarted = gameStarted;
    gameState.betAmount = betAmount;
    gameState.unrevealedCount = unrevealedCount;
    gameState.currentMultiply = currentMultiply;

    const isWinning =
      unrevealedCount === getNumberOfSafeCells(gameState.gridTable);

    if (isWinning && totalWinningAmount < 0) {
      resultDiv.textContent = `Congratulations! You won ${totalWinningAmount} coins!`;
    } else {
      resultDiv.textContent = "Game over. You hit a mine!";
    }

    revealGridTable(gameState);
  } catch (error) {
    console.error("Error handling game end:", error);
    resultDiv.textContent = "An error occurred while handling game end.";
  }
}

function getNumberOfSafeCells(grid: GridItem[][]): number {
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
