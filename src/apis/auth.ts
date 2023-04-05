import { getAPI, postAPI } from './';

export const refreshAccessToken = (
  accessToken: string | null,
  refreshToken: string | null,
) => postAPI('/auth/refresh-access-token', { accessToken, refreshToken });

export const login = async (
  address: string,
  signature: string,
  message: string,
): Promise<{
  accessToken: string;
  refreshToken: string;
  address: string;
  email: string | null;
}> => {
  const response = await postAPI('/auth/login', {
    address,
    signature,
    message,
  });
  return response.data.data;
};

export const getCurrentUser = async (): Promise<{
  address: string;
  email: string | null;
}> => {
  const response = await getAPI('/auth/current', {});
  return response.data.data;
};
