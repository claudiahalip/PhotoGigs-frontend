import { useRouter } from 'next/router';
import Image from 'next/image';
import ReviewCard from '../../components/ReviewCard';
import { usePhotographer } from '../../hooks/usePhotographers';
import { useReviews, useAddReview } from '../../hooks/useReviews';
import { useState } from 'react';
import { Review } from '../../types';

const PhotographerPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const photographerId = typeof id === 'string' ? id : '';
  const { data: photographer, isLoading: photographerLoading, isError: photographerIsError } = usePhotographer(photographerId);
  const { data: reviews, isLoading: reviewsLoading, isError: reviewsIsError } = useReviews(photographerId);
  const addReviewMutation = useAddReview();
  const [reviewContent, setReviewContent] = useState('');

  if (photographerLoading || reviewsLoading) return <div>Loading...</div>;
  if (photographerIsError || reviewsIsError) return <div>Error fetching data</div>;

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof id === 'string') {
      addReviewMutation.mutate({ content: reviewContent, photographer_id: parseInt(id, 10) });
      setReviewContent('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Image
            src={photographer.image_url}
            alt={photographer.name}
            width={300}
            height={300}
            className="rounded-lg"
          />
          <h1 className="text-3xl font-bold mt-4">{photographer.name}</h1>
          <a
            href={photographer.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            {photographer.website}
          </a>
          <p>YOE: {photographer.years_of_experience}</p>
          <p>
            {photographer.city}, {photographer.state}
          </p>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          <div className="space-y-4">
            {reviews?.map((review: Review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Leave a Review</h3>
            <form onSubmit={handleReviewSubmit}>
              <textarea
                className="w-full p-2 text-gray-700 border rounded"
                rows={4}
                value={reviewContent}
                onChange={(e) => setReviewContent(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                disabled={addReviewMutation.isLoading}
              >
                {addReviewMutation.isLoading ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographerPage;
