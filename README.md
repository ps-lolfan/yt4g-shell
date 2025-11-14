# 🧩 yt4g-shell

The **Shell Host Application** for the **YouTube-for-Google (yt4g)** ecosystem.  
It acts as the compositional root that dynamically mounts all microfrontends through module federation.

---

## 🧱 Purpose

- Provides app-wide routing, layout, and theming
- Loads microfrontends (`yt4g-feed`, `yt4g-player`, etc.) at runtime
- Manages authentication shared state and user context
- Supplies common logging and analytics initialization
- Central entrypoint for CI/CD deployments

---

## ⚙️ Tech Stack

- **React 18 + TypeScript**
- **Vite + vite-plugin-federation**
- **React Router v6**
- **Redux Toolkit / Context API**
- **i18next** for i18n
- Federated consumption of `yt4g-ui-kit` and plugin MFEs

---

## 🚀 Local Development

```bash
npm install
npm run dev
```
