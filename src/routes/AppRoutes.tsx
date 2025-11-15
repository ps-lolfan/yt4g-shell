import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const FeedApp = React.lazy(() => import("yt4g_feed/App"));

export default function AppRoutes() {
  console.log("Shell loaded AppRoutes component");

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/feed/*"
          element={
            <>
              {console.log("Feed route matched")}
              <FeedApp />
            </>
          }
        />
      </Routes>
    </Suspense>
  );
}
