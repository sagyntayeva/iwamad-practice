import { useLikes } from "../context/useLikes";

function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <button
      type="button"
      onClick={addLike}
      className="self-start mt-2 rounded-lg bg-sky-600 text-white px-4 py-2 text-sm hover:bg-sky-700 transition-colors"
    >
      Like: {likes}
    </button>
  );
}

export default LikeButton;
