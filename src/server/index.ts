import type {
  GameState,
  GridItem,
  RevealedGridItemResponse,
  RevealedResultResponse,
} from "../types/index.js";

const backendBaseUrl = "http://localhost:4000";

async function checkConnection(): Promise<boolean> {
  try {
    const response = await fetch(`${backendBaseUrl}/game/check-connection`);
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error checking connection:", error);
    return false;
  }
}

async function createGridTemplate(
  gridSize: number
): Promise<GridItem[][] | null> {
  try {
    const response = await fetch(`${backendBaseUrl}/game/create-template`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gridSize }),
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Failed to create template");
    }
  } catch (error) {
    console.error("Error creating template grid:", error);
    return null;
  }
}

async function initializeGame(
  betAmount: number,
  mineCount: number,
  gridSize: number
): Promise<GameState | null> {
  try {
    const response = await fetch(`${backendBaseUrl}/game/start-game`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ betAmount, gridSize, mineCount }),
    });
    if (response.ok) {
      const gameState: GameState = await response.json();
      return gameState;
    } else return null;
  } catch (error) {
    console.error("Error initializing game:", error);
    return null;
  }
}

async function revealGridItem(
  id: string
): Promise<RevealedGridItemResponse | null> {
  try {
    const response = await fetch(`${backendBaseUrl}/game/reveal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    if (response.ok) {
      const revealedGridItemResponse: RevealedGridItemResponse | null =
        await response.json();
      return revealedGridItemResponse;
    } else return null;
  } catch (error) {
    console.error("Error revealing grid item:", error);
    throw error;
  }
}

async function revealGameResult(): Promise<RevealedResultResponse | null> {
  try {
    const response = await fetch(`${backendBaseUrl}/game/reveal-result`);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to retrieve game result");
    }
  } catch (error) {
    console.error("Error revealing game result:", error);
    throw error;
  }
}

async function cashout(): Promise<RevealedResultResponse | null> {
  try {
    const response = await fetch(`${backendBaseUrl}/game/cashout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to retrieve game result");
    }
  } catch (error) {
    console.error("Error revealing game result:", error);
    throw error;
  }
}

export {
  checkConnection,
  createGridTemplate,
  initializeGame,
  revealGridItem,
  revealGameResult,
  cashout,
};
