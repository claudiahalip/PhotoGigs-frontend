import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { Review } from '../types';

const fetchReviews = async (photographerId: string): Promise<Review[]> => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/photographers/${photographerId}/reviews`);
  return data;
};

const fetchAllReviews = async (): Promise<Review[]> => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/reviews`);
  return data;
};

const addReview = async (newReview: Omit<Review, 'id' | 'created_at'>): Promise<Review> => {
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/reviews`, { review: newReview });
  return data;
};

export const useReviews = (photographerId: string) => {
  return useQuery(['reviews', photographerId], () => fetchReviews(photographerId));
};

export const useAllReviews = () => {
  return useQuery('reviews', fetchAllReviews);
};

export const useAddReview = () => {
  const queryClient = useQueryClient();
  return useMutation(addReview, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['reviews', data.photographer_id]);
      queryClient.invalidateQueries('reviews');
    },
  });
};
