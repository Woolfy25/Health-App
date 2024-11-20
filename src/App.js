import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const LazyHomePage = lazy(() => import("./pages/HomePage/HomePage"));
const LazyRegister = lazy(() => import("./pages/Register/Register"));
const LazyLogin = lazy(() => import("./pages/Login/Login"));
const LazyNotFound = lazy(() => import("./pages/NotFound/NotFound"));
const LazyUserDiary = lazy(() => import("./pages/Diary/Diary"));
const LazyUserCalc = lazy(() => import("./pages/Calculator/Calculator"));

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<LazyHomePage />}></Route>
          <Route path="/login" element={<LazyLogin />}></Route>
          <Route path="/register" element={<LazyRegister />}></Route>
          <Route path="/diary" element={<LazyUserDiary />}></Route>
          <Route path="/calculator" element={<LazyUserCalc />}></Route>
          <Route path="*" element={<LazyNotFound />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
