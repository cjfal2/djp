import { useNavigate } from "react-router-dom";

export default function RspMain() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick = {() => {navigate(-1)}}>뒤로가기</button>
      <div>rspMain</div>
    </>
  );
}
