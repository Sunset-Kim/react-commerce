import { ForwardedRef, useState } from "react";

interface PostAdress {
  roadAddress: string;
  roadnameCode: number;
}

export const useAddress = () => {
  const [post, setPost] = useState<PostAdress>();

  const onSearch = () => {
    new window.daum.Postcode({
      oncomplete: (data) => {
        const { roadAddress, roadnameCode } = data;
        setPost({ roadAddress, roadnameCode });
      },
    }).open();
  };

  return {
    roadAddress: post?.roadAddress,
    roadnameCode: post?.roadnameCode,
    onSearch,
  };
};
