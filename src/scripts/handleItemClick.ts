import { revealGridItem } from "../server/index.js";
import updateGridItem from "./update-grid-item.js";
import updateControllerValues from "./update-controller-values.js";
import type { GameState, RevealedGridItemResponse } from "../types/index.js";

export default async function (event: Event, gameState: GameState) {
  if (!gameState.gameStarted) return;

  const element = event.currentTarget as HTMLButtonElement;
  const id = element.dataset.id!;

  try {
    const revealedGridItemResponse: RevealedGridItemResponse | null =
      await revealGridItem(id);

    if (revealedGridItemResponse) {
      const { gridItem, unrevealedCount, currentMultiply, nextMultiply } =
        revealedGridItemResponse;

      gameState.gridTable = gameState.gridTable.map((row) =>
        row.map((item) => (item.id === gridItem.id ? { ...gridItem } : item))
      );
      /* TODO: this will not be updated */
      gameState.unrevealedCount = unrevealedCount;
      gameState.currentMultiply = currentMultiply;
      gameState.nextMultiply = nextMultiply;

      updateGridItem(element, gridItem, gameState);
      updateControllerValues(gameState);
    }
  } catch (error) {
    console.error("Failed to reveal cell:", error);
  }
}
