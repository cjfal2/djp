import GameStartButton from "./gameStartButton";

interface GameStartCardProps {
  game: string;
}

export default function gameStartCard({ game }: GameStartCardProps) {
  return (
    <>
      <div className="max-w-sm p-4 rounded-lg text-center">
        {/* <h2 className="font-bold">가위바위보</h2> */}
        <img
          src={`image/thumbnail/${game}.png`}
          alt={game}
          className="w-full h-40 object-fill rounded-md shadow-md"
        />
        <GameStartButton game={game} />
      </div>
    </>
  );
}
