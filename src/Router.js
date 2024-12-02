import { HashRouter, Route, Routes } from "react-router-dom";
import Start from "./pages/start/Start";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Start />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
