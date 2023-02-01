/** @jsxImportSource @emotion/react */
import { IconHome } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";
import Button from "../Button/button";
import Text from "../text";

export default function Error500() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="invisible">서버에러 발생</h2>
      <figure className="relative mx-auto mb-4 max-w-xl overflow-hidden rounded-full border">
        <img
          className="aspect-square"
          src="/images/error-500.jpg"
          alt="error occur"
        />
        <figcaption className="absolute left-1/2 bottom-4 -translate-x-1/2 text-sm text-stone-400">
          <a
            className="mr-2 cursor-pointer"
            target="_blank"
            rel="noreferrer"
            href="https://www.freepik.com/free-vector/500-internal-server-error-concept-illustration_13416109.htm#query=500%20error&position=1&from_view=search&track=sph"
          >
            Image by storyset
          </a>
          on Freepik
        </figcaption>
      </figure>

      <Button
        size="sm"
        color="sky"
        variants="outlined"
        sx={tw`w-fit text-sm text-sky-600 mx-auto`}
        onClick={() => navigate("/")}
      >
        <IconHome
          size="16"
          className="mr-2"
        />
        <Text>홈으로</Text>
      </Button>
    </div>
  );
}
