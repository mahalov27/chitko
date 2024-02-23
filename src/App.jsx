import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/mainPage/MainPage";
// import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

const App = () => {
  const location= useLocation();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>} />
          {/* <Route path="*" element={<NotFoundPage />}/> */}
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
