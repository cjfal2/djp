// import { Link } from "react-router-dom";
import GameStartCard from "../basic/gamestartcard/gameStartCard";

export default function MainPage() {
  return (
    <div className="flex flex-col w-full max-w-screen-2xl mx-auto bg-back">
      {/* <nav>네브바</nav> */}
      <div className="w-full mx-auto px-4 py-10 justify-center items-center font-bold">
        <div>그림자리</div>
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <GameStartCard />
          <GameStartCard />
          <GameStartCard />
          <GameStartCard />
        </ul>
        {/* <Link to={"/rcp"}>가위바위보</Link> */}
      </div>
    </div>
  );
}
