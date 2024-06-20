import { revealGameResult } from "../server/index.js";
import type { GameState, GridItem } from "../types/index.js";
import revealGridTable from "./reveal-grid-table.js";

export default async function (gameState: GameState) {
  const resultDiv: HTMLDivElement = document.querySelector(".result")!;

  try {
    const gameResult = await revealGameResult();
    if (!gameResult) {
      resultDiv.textContent = "Failed to retrieve game result from server.";
      return;
    }

    const {
      betAmount,
      multiples,
      totalWinningAmount,
      uncoveredCells,
      minesResult,
    } = gameResult;

    gameState.multiples = multiples;
    gameState.uncoveredItems = uncoveredCells;
    gameState.grid = minesResult;

    const isWinning =
      gameState.uncoveredItems === getNumberOfSafeCells(gameState.grid);

    if (isWinning) {
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
