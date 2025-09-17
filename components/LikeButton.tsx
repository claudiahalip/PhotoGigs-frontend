import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  return (
    <button
      onClick={handleLike}
      className={`flex items-center space-x-2 focus:outline-none ${
        liked ? 'text-red-500' : 'text-gray-500'
      }`}
    >
      <FaHeart />
      <span>{likes}</span>
    </button>
  );
};

export default LikeButton;
