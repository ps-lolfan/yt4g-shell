import { useEffect } from "react";
import { useUser } from "../context/UserContext";

export default function Home() {
  const { user, login } = useUser();

  useEffect(() => {
    // Pull the token from the URL if we just returned from OAuth
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // Decode the JWT payload (basic, no validation; backend already issued it)
      try {
        const [, payloadBase64] = token.split(".");
        const payload = JSON.parse(window.atob(payloadBase64));
        login(token, { id: payload.id, name: payload.name });
      } catch (err) {
        console.error("Failed to decode token:", err);
      }

      // Clean the ?token=... from the address bar
      params.delete("token");
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [login]);

  if (!user) {
    return (
      <div style={{ color: "#fff" }}>
        <h1>Welcome to yt4g-shell</h1>
        <a
          href="http://localhost:4002/api/auth/google"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            borderRadius: 6,
            background: "#4285F4",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Sign in with Google
        </a>
      </div>
    );
  }

  return (
    <div style={{ color: "#fff" }}>
      <h1>Welcome back, {user.name} !</h1>
      <p>Your user ID: {user.id}</p>
    </div>
  );
}
