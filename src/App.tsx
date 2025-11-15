import { ThemeProvider, Button } from "yt4g-ui-kit";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <ThemeProvider mode="dark">
      <BrowserRouter>
        <div style={{ padding: "1rem" }}>
          <h1 style={{ color: "#fff" }}>yt4g Shell x UI Kit</h1>
          <Button
            onClick={() => alert("Hello from yt4g-ui-kit!")}
            style={{ marginBottom: "1rem" }}
          >
            Test Button
          </Button>

          <AppRoutes />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
