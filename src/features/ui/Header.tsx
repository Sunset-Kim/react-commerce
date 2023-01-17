import React from "react";
import { Link } from "react-router-dom";
import Text from "./text";

export default function header() {
  return (
    <div className="mx-auto px-20pxr xl:px-40pxr">
      <div className="py-1">
        <ul className="flex justify-end gap-2">
          <li>고객센터</li>
          <li>관심상품</li>
          <li>마이페이지</li>
          <li>로그인</li>
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
