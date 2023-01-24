import { ForwardedRef, useState } from "react";

interface PostAdress {
  roadAddress: string;
  roadnameCode: number;
}

export const useAddress = ({
  onComplete,
}: {
  onComplete: (data: PostData) => void;
}) => {
  const onSearch = () => {
    new window.daum.Postcode({
      oncomplete: onComplete,
    }).open();
  };

  return {
    onSearch,
  };
};
