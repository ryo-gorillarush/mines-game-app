var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import cashoutGameController from "../scripts/cashout-game-controller.js";
import controlResultOverlay from "../scripts/control-result-overlay.js";
import { cashout } from "./index.js";
export default function (gameState) {
    return __awaiter(this, void 0, void 0, function* () {
        const resultDiv = document.querySelector(".result");
        try {
            const finalResult = yield cashout();
            if (finalResult) {
                gameState.gameStarted = false;
                resultDiv.textContent = "";
                controlResultOverlay(finalResult.totalWinningAmount, finalResult.currentMultiply);
                cashoutGameController();
            }
            else
                throw new Error();
        }
        catch (error) {
            console.error("Error cashout", error);
            resultDiv.textContent = "Failed to cashout.";
            return null;
        }
    });
}
//# sourceMappingURL=cashout-game.js.map