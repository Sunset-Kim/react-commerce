import tw from "twin.macro";
import { Link } from "react-router-dom";
import Button from "./Button/button";
import Text from "./text";
import { useAuth } from "../auth";

export default function header() {
  const { user, signInWithGoogle, logout } = useAuth();

  return (
    <div className="mx-auto px-20pxr xl:px-40pxr">
      <div className="py-1">
        <ul className="flex justify-end gap-2">
          <li>고객센터</li>
          <li>관심상품</li>
          <li>
            <Link to="my">마이페이지</Link>
          </li>
          {/* FIXME: 로그인 버튼 추가 */}
          <li>
            {user ? (
              <Button
                variants="outlined"
                onClick={logout}
              >
                로그아웃
              </Button>
            ) : (
              <Button
                variants="outlined"
                onClick={signInWithGoogle}
              >
                로그인
              </Button>
            )}
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between pb-2">
        <Text size="2xl">로고</Text>

        <ul className="flex gap-20pxr">
          <li>
            <Link to="/products">
              <Text>SHOP</Text>
            </Link>
          </li>
          <li>
            <button>검색</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
