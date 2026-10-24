import { useLikes } from "../context/useLikes";
import Button from "./ui/Button";

function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <Button variant="primary" onClick={addLike} className="self-start">
      Like: {likes}
    </Button>
  );
}

export default LikeButton;
