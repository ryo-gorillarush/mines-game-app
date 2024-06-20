import { createGridTable } from "../scripts/create-grid-table.js";
import { checkConnection, createGridTemplate } from "./index.js";

export default async function () {
  const resultDiv: HTMLDivElement = document.querySelector(".result")!;
  const gridSizeInput: HTMLInputElement = document.querySelector("#grid-size")!;
  const gridSize = parseInt(gridSizeInput.value, 10);
  try {
    const isConnected = await checkConnection();
    if (isConnected) {
      const templateGrid = await createGridTemplate(gridSize);

      if (templateGrid) {
        createGridTable(templateGrid);
      } else {
        throw new Error("Failed to create template grid");
      }
    } else {
      console.error("Backend connection failed");
      resultDiv.textContent = "Failed to connect to the backend.";
    }
  } catch (error) {
    console.error("Error checking connection:", error);
    resultDiv.textContent = "Failed to check connection with the backend.";
  }
}
