import { useNavigate } from "react-router-dom";

export default function RcpMain() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick = {() => {navigate(-1)}}>뒤로가기</button>
      <div>rcpMain</div>
    </>
  );
}
