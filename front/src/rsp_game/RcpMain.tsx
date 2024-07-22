import { useState } from "react";
import BackButton from "../basic/backButton";

// 0: 보자기, 1: 가위 2: 주먹

type Choice = "bojagi" | "gawi" | "joomuk";

const choices: Choice[] = ["bojagi", "gawi", "joomuk"];

export default function RspMain() {
  // 랜덤 숫자 0~2
  const getRandomChoice = (): Choice => {
    return choices[Math.floor(Math.random() * 3)];
  };

  // 승자 정하기
  const determineWinner = (
    userChoice: Choice,
    computerChoice: Choice
  ): string => {
    if (userChoice === computerChoice) {
      return "비겼다..";
    }
    if (
      (userChoice === "joomuk" && computerChoice === "gawi") ||
      (userChoice === "bojagi" && computerChoice === "joomuk") ||
      (userChoice === "gawi" && computerChoice === "bojagi")
    ) {
      return "승리!";
    }
    return "패배~";
  };

  // 상대방이 내는거
  const [computerChoice, setComputerChoice] = useState<string>("bojagi");
  // 내가 내는거
  const [myChoice, setMyChoice] = useState<Choice | null>(null);
  // 결과
  const [result, setResult] = useState<string>("");
  //
  const handleClick = (choice: Choice) => {
    const randomNumber = getRandomChoice();
    setMyChoice(choice);
    setComputerChoice(randomNumber);
    setResult(determineWinner(choice, randomNumber));
  };

  return (
    <div className="w-full">
      <BackButton />
      {myChoice && computerChoice && (
        <div className="w-full flex my-5 flex-col justify-center items-center gap-3">
          <img src={`image/rsp/${computerChoice}.png`} alt={computerChoice} className="w-28 h-w-28 bg-red-300 rounded-full"/>
          <p className="text-4xl">{result}</p>
          <img src={`image/rsp/${myChoice}.png`} alt={myChoice} className="w-28 h-w-28 bg-blue-300 rounded-full"/>
        </div>
      )}
      <div className="w-full flex justify-center items-center">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => handleClick(choice)}
            className="border bg-blue-300 p-2 m-2 w-40 h-40 rounded-full hover:scale-95 hover:opacity-85"
          >
            <img src={`image/rsp/${choice}.png`} alt={choice} />
          </button>
        ))}
      </div>
    </div>
  );
}
