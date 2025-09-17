import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { Photographer } from '../types';

const fetchPhotographers = async (): Promise<Photographer[]> => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/photographers`);
  return data;
};

const fetchPhotographer = async (id: string): Promise<Photographer> => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/photographers/${id}`);
  return data;
};

const addPhotographer = async (newPhotographer: Omit<Photographer, 'id' | 'reviews'>): Promise<Photographer> => {
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/photographers`, { photographer: newPhotographer });
  return data;
};

export const usePhotographers = () => {
  return useQuery('photographers', fetchPhotographers);
};

export const usePhotographer = (id: string) => {
  return useQuery(['photographer', id], () => fetchPhotographer(id));
};

export const useAddPhotographer = () => {
  const queryClient = useQueryClient();
  return useMutation(addPhotographer, {
    onSuccess: () => {
      queryClient.invalidateQueries('photographers');
    },
  });
};
