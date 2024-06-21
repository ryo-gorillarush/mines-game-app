var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const backendBaseUrl = "http://localhost:4000";
function checkConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${backendBaseUrl}/game/check-connection`);
            if (response.ok) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.error("Error checking connection:", error);
            return false;
        }
    });
}
function createGridTemplate(gridSize) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${backendBaseUrl}/game/create-template`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ gridSize }),
            });
            if (response.ok) {
                return yield response.json();
            }
            else {
                throw new Error("Failed to create template");
            }
        }
        catch (error) {
            console.error("Error creating template grid:", error);
            return null;
        }
    });
}
function initializeGame(betAmount, mineCount, gridSize) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${backendBaseUrl}/game/start-game`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ betAmount, gridSize, mineCount }),
            });
            if (response.ok) {
                const gameState = yield response.json();
                return gameState;
            }
            else
                return null;
        }
        catch (error) {
            console.error("Error initializing game:", error);
            return null;
        }
    });
}
function revealGridItem(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${backendBaseUrl}/game/reveal`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
            if (response.ok) {
                const revealedGridItemResponse = yield response.json();
                return revealedGridItemResponse;
            }
            else
                return null;
        }
        catch (error) {
            console.error("Error revealing grid item:", error);
            throw error;
        }
    });
}
function revealGameResult() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${backendBaseUrl}/game/reveal-result`);
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error("Failed to retrieve game result");
            }
        }
        catch (error) {
            console.error("Error revealing game result:", error);
            throw error;
        }
    });
}
function cashout() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${backendBaseUrl}/game/cashout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error("Failed to retrieve game result");
            }
        }
        catch (error) {
            console.error("Error revealing game result:", error);
            throw error;
        }
    });
}
export { checkConnection, createGridTemplate, initializeGame, revealGridItem, revealGameResult, cashout, };
//# sourceMappingURL=index.js.map