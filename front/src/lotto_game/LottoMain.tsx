import { useRef, useState } from "react";
import BackButton from "../basic/backButton";
import html2canvas from "html2canvas";

export default function LottoMain() {
  const [numberSets, setNumberSets] = useState<number[][]>([]);

  // 6개 고르고 넘버셋에 추가
  const generateNumbers = () => {
    if (numberSets.length >= 10) {
      return; // 최대 10개의 세트까지만 허용
    }

    const newNumbers: Set<number> = new Set();
    while (newNumbers.size < 6) {
      const randomNum = Math.floor(Math.random() * 45) + 1;
      newNumbers.add(randomNum);
    }

    const sortedNumbers = Array.from(newNumbers).sort((a, b) => a - b);
    setNumberSets([...numberSets, sortedNumbers]);
  };

  // 리셋
  const resetNumbers = () => {
    setNumberSets([]);
  };

  // 다운로드
  const lottoNumbersRef = useRef<HTMLDivElement | null>(null);

  const handleDownloadImage = () => {
    const element = lottoNumbersRef.current;
    if (element) {
      html2canvas(element).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "lotto_numbers.png";
        document.body.appendChild(link); // 링크를 문서에 추가
        link.click();
        document.body.removeChild(link); // 클릭 후 링크를 제거
      }).catch(err => {
        console.error("html2canvas error:", err);
      });
    } else {
      console.error("Element is null");
    }
  };

  return (
    <div className="w-full">
      <BackButton />
      <div className="w-full flex flex-col justify-center items-center">
        <span>
          <button
            onClick={generateNumbers}
            className="m-2 px-2 py-1 rounded-lg bg-main text-white font-semibold"
          >
            {`숫자뽑기`}
          </button>
          <button
            onClick={resetNumbers}
            className="m-2 px-2 py-1 rounded-lg bg-red-400 text-white font-semibold"
          >
            리셋
          </button>
          <button
            onClick={handleDownloadImage}
            className="m-2 px-2 py-1 rounded-lg bg-green-500 text-white font-semibold"
          >
            이미지로 다운로드
          </button>
        </span>
        <div ref={lottoNumbersRef} className="mt-4">
          {numberSets.map((set, index) => (
            <div
              key={index}
              className="flex justify-center items-center space-x-4 mb-4"
            >
              <h3 className="font-bold">세트 {index + 1}</h3>
              {set.map((number: number, idx: number) => {
                let bgColor: string = "";
                if (number >= 1 && number <= 10) {
                  bgColor = "bg-yellow-500";
                } else if (number >= 11 && number <= 20) {
                  bgColor = "bg-blue-500";
                } else if (number >= 21 && number <= 30) {
                  bgColor = "bg-red-500";
                } else if (number >= 31 && number <= 40) {
                  bgColor = "bg-gray-500";
                } else if (number >= 41 && number <= 45) {
                  bgColor = "bg-green-500";
                }

                return (
                  <div
                    key={idx}
                    className={`w-12 h-12 flex items-center justify-center rounded-full ${bgColor}`}
                  >
                    <span className="text-lg font-bold bg-white text-black rounded-full w-7 h-w-7 flex items-center justify-center">
                      {number}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
