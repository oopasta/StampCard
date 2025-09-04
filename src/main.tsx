
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  createRoot(document.getElementById("root")!).render(<App />);
  
  // --- iOS vh fallback（貼在 createRoot 之前即可） ---
function setVHVar() {
  const h = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${h}vh`);
}
(function bootIOSVHFallback() {
  const ua = navigator.userAgent || '';
  const isiOS = /iPhone|iPad|iPod/i.test(ua);
  if (isiOS) {
    setVHVar();
    window.addEventListener('resize', setVHVar);
    window.addEventListener('orientationchange', setVHVar);
  }
})();
