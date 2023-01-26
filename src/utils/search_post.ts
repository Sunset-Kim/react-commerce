export function searchPost({
  onComplete,
}: {
  onComplete: (data: PostData) => void;
}) {
  const onSearch = () => {
    new window.daum.Postcode({
      oncomplete: onComplete,
    }).open();
  };

  return {
    onSearch,
  };
}
