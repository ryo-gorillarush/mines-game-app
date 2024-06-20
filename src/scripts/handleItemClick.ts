import { revealGridItem } from "../server/index.js";
import { GameState, RevealedGridItemResponse } from "../types/index.js";
import updateControllerValues from "./update-controller-values.js";
import updateGridItem from "./update-grid-item.js";

export default async function (event: Event, gameState: GameState) {
  if (!gameState.gameStarted) return;

  const element = event.currentTarget as HTMLButtonElement;
  const id = element.dataset.id!;

  try {
    const revealedGridItemResponse: RevealedGridItemResponse | null =
      await revealGridItem(id);

    if (revealedGridItemResponse) {
      const { gridItem, uncoveredCells, multiples } = revealedGridItemResponse;

      gameState.grid = gameState.grid.map((row) =>
        row.map((item) => (item.id === gridItem.id ? { ...gridItem } : item))
      );
      gameState.uncoveredItems = uncoveredCells;
      gameState.multiples = multiples || 1;

      updateGridItem(element, gridItem, gameState);
      updateControllerValues(gameState);
    }
  } catch (error) {
    console.error("Failed to reveal cell:", error);
  }
}
