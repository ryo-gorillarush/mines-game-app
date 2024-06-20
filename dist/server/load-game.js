var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createGridTable } from "../scripts/create-grid-table.js";
import { checkConnection, createGridTemplate } from "./index.js";
export default function () {
    return __awaiter(this, void 0, void 0, function* () {
        const resultDiv = document.querySelector(".result");
        const gridSizeInput = document.querySelector("#grid-size");
        const gridSize = parseInt(gridSizeInput.value, 10);
        try {
            const isConnected = yield checkConnection();
            if (isConnected) {
                const templateGrid = yield createGridTemplate(gridSize);
                if (templateGrid) {
                    createGridTable(templateGrid);
                }
                else {
                    throw new Error("Failed to create template grid");
                }
            }
            else {
                console.error("Backend connection failed");
                resultDiv.textContent = "Failed to connect to the backend.";
            }
        }
        catch (error) {
            console.error("Error checking connection:", error);
            resultDiv.textContent = "Failed to check connection with the backend.";
        }
    });
}
//# sourceMappingURL=load-game.js.map