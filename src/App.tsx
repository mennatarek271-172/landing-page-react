import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Spin } from "antd";

const HomePage = lazy(() => import("./pages/Home"));

function App(): JSX.Element {
  return (
    <Suspense
      fallback={
        <div style={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
          <Spin size="large" />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
