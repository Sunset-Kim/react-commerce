/** @jsxImportSource @emotion/react */
import tw from "twin.macro";
import Link from "../ui/Link";
import Stack from "../ui/Stack/stack";
import Text from "../ui/text";

export default function MyNav() {
  return (
    <div className="w-[180px]">
      <Link to="/my">
        <Text
          as="h2"
          weight="700"
          size="xl"
          sx={tw`mb-20pxr`}
        >
          마이페이지
        </Text>
      </Link>

      <Stack>
        <div className="pb-20pxr">
          <Text
            size="lg"
            sx={tw`mb-2`}
          >
            <strong>쇼핑정보</strong>
          </Text>

          <ul>
            <li>구매내역</li>
            <li>판매내역</li>
            <li>카트</li>
          </ul>
        </div>

        <div className="pb-20pxr">
          <Text
            size="lg"
            sx={tw`mb-2`}
          >
            <strong>내정보</strong>
          </Text>
          <ul>
            <li>프로필 정보</li>
            <li>배송지 관리</li>
          </ul>
        </div>
      </Stack>
    </div>
  );
}
