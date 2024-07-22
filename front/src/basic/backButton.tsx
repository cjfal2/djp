import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button className="px-2 py-1 rounded-md bg-main text-white font-bold" onClick = {() => {navigate(-1)}}>⬅️뒤로가기</button>
  )
}
