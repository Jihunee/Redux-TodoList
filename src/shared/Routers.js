import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";

const Routers = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/:id" element={<Detail />}></Route>
    </Routes>
  </BrowserRouter>;
};

export default Routers;
