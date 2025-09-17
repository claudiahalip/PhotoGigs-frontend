import { Review } from '../types';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const transformDate = (date: string) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <p className="text-white">{review.content}</p>
      <p className="text-gray-400 text-sm mt-2">
        Posted on: {transformDate(review.created_at)}
      </p>
    </div>
  );
};

export default ReviewCard;
