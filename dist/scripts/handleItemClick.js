var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { revealGridItem } from "../server/index.js";
import updateGridItem from "./update-grid-item.js";
import updateControllerValues from "./update-controller-values.js";
export default function (event, gameState) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!gameState.gameStarted)
            return;
        const element = event.currentTarget;
        const id = element.dataset.id;
        try {
            const revealedGridItemResponse = yield revealGridItem(id);
            if (revealedGridItemResponse) {
                const { gridItem, unrevealedCount, currentMultiply, nextMultiply } = revealedGridItemResponse;
                gameState.gridTable = gameState.gridTable.map((row) => row.map((item) => (item.id === gridItem.id ? Object.assign({}, gridItem) : item)));
                gameState.unrevealedCount = unrevealedCount;
                gameState.currentMultiply = currentMultiply;
                gameState.nextMultiply = nextMultiply;
                updateGridItem(element, gridItem, gameState);
                updateControllerValues(gameState);
            }
        }
        catch (error) {
            console.error("Failed to reveal cell:", error);
        }
    });
}
//# sourceMappingURL=handleItemClick.js.map