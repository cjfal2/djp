import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./main_page/MainPage";
import RcpMain from "./rsp_game/RcpMain";
import LottoMain from './lotto_game/LottoMain';

export default function App() {
  return (
    <div className="bg-back">
      <BrowserRouter>
        <Routes>
          {/* 위에서부터 순서대로 찾아짐  */}
          <Route path="/" element={<MainPage />} />
          <Route path="/rsp" element={<RcpMain />} />
          <Route path="/lotto" element={<LottoMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
