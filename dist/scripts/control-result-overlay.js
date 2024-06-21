export default function (amount, odd, initialized) {
    const gameViewElement = document.querySelector(".game-view");
    const existingOverlay = gameViewElement.querySelector(".result-overlay");
    if (existingOverlay || initialized) {
        existingOverlay === null || existingOverlay === void 0 ? void 0 : existingOverlay.remove();
        return;
    }
    const resultOverlay = document.createElement("div");
    const amountElement = document.createElement("p");
    const oddElement = document.createElement("p");
    resultOverlay.className = "result-overlay";
    amountElement.className = "result-amount";
    oddElement.className = "result-odd";
    amountElement.textContent = `You won: $${amount === null || amount === void 0 ? void 0 : amount.toFixed(2)}`;
    oddElement.textContent = `${odd}x`;
    resultOverlay.appendChild(amountElement);
    resultOverlay.appendChild(oddElement);
    gameViewElement.appendChild(resultOverlay);
}
//# sourceMappingURL=control-result-overlay.js.map