import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ElementLandingPage } from "./screens/ElementLandingPage/ElementLandingPage";

createRoot(document.getElementById("app")).render(
<StrictMode>
  <ElementLandingPage />
</StrictMode>

);