export default function (amount?: number, odd?: number, initialized?: boolean) {
  const gameViewElement: HTMLDivElement = document.querySelector(".game-view")!;
  const existingOverlay = gameViewElement.querySelector(".result-overlay");

  if (existingOverlay || initialized) {
    existingOverlay?.remove();
    return;
  }

  const resultOverlay = document.createElement("div");
  const amountElement = document.createElement("p");
  const oddElement = document.createElement("p");

  resultOverlay.className = "result-overlay";
  amountElement.className = "result-amount";
  oddElement.className = "result-odd";

  amountElement.textContent = `You won: $${amount?.toFixed(2)}`;
  oddElement.textContent = `${odd}x`;

  resultOverlay.appendChild(amountElement);
  resultOverlay.appendChild(oddElement);

  gameViewElement.appendChild(resultOverlay);
}
