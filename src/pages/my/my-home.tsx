/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import tw from "twin.macro";

export default function MyHome() {
  return (
    <div>
      <Link to="cart">카트바로가기</Link>
      <Link to="profile">프로필바로가기</Link>
    </div>
  );
}
