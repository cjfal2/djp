import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./main_page/MainPage";
import RcpMain from "./rsp_game/RcpMain";

export default function App() {
  return (
    <div className="bg-back">
      <BrowserRouter>
        <Routes>
          {/* 위에서부터 순서대로 찾아짐  */}
          <Route path="/" element={<MainPage />} />
          <Route path="/rsp" element={<RcpMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
