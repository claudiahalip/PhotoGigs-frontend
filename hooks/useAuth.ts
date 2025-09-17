import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { UserSession, Credentials } from '../types';

const checkUser = async (): Promise<UserSession> => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/logged_in`, { withCredentials: true });
  return data;
};

const login = async (credentials: Credentials) => {
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, { user: credentials }, { withCredentials: true });
  return data;
};

const logout = async () => {
  await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/logout`, { withCredentials: true });
};

const signup = async (credentials: Credentials) => {
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`, { user: credentials }, { withCredentials: true });
  return data;
};

export const useAuth = () => {
  const queryClient = useQueryClient();

  const { data: user, isLoading, isError } = useQuery('user', checkUser);

  const loginMutation = useMutation(login, {
    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
  });

  const logoutMutation = useMutation(logout, {
    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
  });

  const signupMutation = useMutation(signup, {
    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
  });

  return {
    user,
    isLoading,
    isError,
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    signup: signupMutation.mutate,
  };
};
