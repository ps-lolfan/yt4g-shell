import { ThemeProvider, Button } from "yt4g-ui-kit";

export default function App() {
  return (
    <ThemeProvider mode="dark">
      <h1 style={{ color: "#fff", padding: "1rem" }}>yt4g Shell x UI Kit</h1>
      <Button onClick={() => alert("Hello from yt4g-ui-kit!")}>
        Test Button
      </Button>
    </ThemeProvider>
  );
}
