import Spinner from "./spinner";

export default function ScreenLoading() {
  return (
    <div className="align-center fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-black/25">
      <Spinner size="lg" />
    </div>
  );
}
