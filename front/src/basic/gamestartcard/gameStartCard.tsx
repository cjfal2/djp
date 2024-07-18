import GameStartButton from "./gameStartButton";

export default function gameStartCard() {
  return (
    <>
      <div className="p-4 rounded-lg  text-center">
        <img
          src="image/test1.jpg"
          alt="Game 1"
          className="w-full h-40 object-cover rounded-md shadow-md"
        />
        <GameStartButton/>
      </div>
    </>
  );
}
