export interface GridItem {
  id: string;
  isMine: boolean;
  isRevealed: boolean;
}

export interface GameState {
  grid: GridItem[][];
  gameStarted: boolean;
  uncoveredItems: number;
  multiples: number;
}

export interface Test {
  gridTable: GridItem[][];
  gameStarted: boolean;
  betAmount: number;
  mineCount: number;
  gridSize: number;
  uncoveredItems: number;
  currentMultiply: number;
  nextMultiply: number;
}

export interface RevealedGridItemResponse {
  gridItem: GridItem;
  uncoveredCells: number;
  multiples: number;
}

export interface RevealedResultResponse {
  betAmount: number;
  multiples: number;
  totalWinningAmount: number;
  uncoveredCells: number;
  minesResult: GridItem[][];
}
