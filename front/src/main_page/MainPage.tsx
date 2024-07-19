// import { Link } from "react-router-dom";
import GameStartCard from "../basic/gamestartcard/gameStartCard";

export default function MainPage() {
  const games: [string] = ["rsp"];

  return (
    <div className="flex flex-col w-full max-w-screen-2xl mx-auto bg-back">
      {/* <nav>네브바</nav> */}
      <div className="w-full mx-auto px-4 py-10 justify-center items-center font-bold">
        <div>그림자리</div>
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games.map((game, index) => (
            <li key={index}>
              <GameStartCard game={game}/>
            </li>
          ))}
        </ul>
        {/* <Link to={"/rsp"}>가위바위보</Link> */}
      </div>
    </div>
  );
}
