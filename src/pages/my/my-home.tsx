/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import tw from "twin.macro";

export default function MyHome() {
  return (
    <div>
      <Link to="cart">
        <div className="bg-">카트</div>
      </Link>
      <Link to="profile">
        <div>프로필</div>
      </Link>
    </div>
  );
}
