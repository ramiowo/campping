import { Route, Routes, useLocation } from "react-router-dom";
import Start from "./pages/start/Start";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";

const Router = () => {
  const location = useLocation(); // 현재 경로를 가져옴

  const hiddenHeaderPaths = ["/"]; // 헤더를 숨길 경로 설정
  const shouldShowHeader = !hiddenHeaderPaths.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/Search" element={<Search />}></Route>
      </Routes>
    </>
  );
};

export default Router;
