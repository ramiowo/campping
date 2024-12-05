import { Route, Routes, useLocation } from "react-router-dom";
import Start from "./pages/start/Start";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Detail from "./pages/detail/Detail";
import Car from "./pages/category/components/Car";
import Normal from "./pages/category/components/Normal";
import Caravan from "./pages/category/components/Caravan";
import Glamping from "./pages/category/components/Glamping";
import Pet from "./pages/category/components/Pet";
import Footer from "./components/Footer";

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
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/car" element={<Car />}></Route>
        <Route path="/caravan" element={<Caravan />}></Route>
        <Route path="/normal" element={<Normal />}></Route>
        <Route path="/glamping" element={<Glamping />}></Route>
        <Route path="/pet" element={<Pet />}></Route>
        <Route path="/Search" element={<Search />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
