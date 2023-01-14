import React from "react";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <div className="container mx-auto">
      <div className="py-1">
        <ul className="flex justify-end gap-2">
          <li>고객센터</li>
          <li>관심상품</li>
          <li>마이페이지</li>
        </ul>
      </div>
      <div className="flex justify-between pb-2">
        <div>로고</div>

        <ul className="flex gap-2">
          <li>
            <Link to="/products">SHOP</Link>
          </li>
          <li>
            <button>검색</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
