import React from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 justify-center items-center font-bold">
        MainPage
      </div>
      <Link to={"/rcp"}>가위바위보</Link>
    </div>
  );
}
