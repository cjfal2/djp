import { Link } from "react-router-dom";

interface GameStartButton {
  game: string;
}

export default function gameStartButton({ game }: GameStartButton) {
  return (
    <Link to={`/${game}`}>
      <button className="mt-2 bg-main text-white justify-center items-center py-1 px-8 rounded-xl hover:scale-95">
        Play
      </button>
    </Link>
  );
}
