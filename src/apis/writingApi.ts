import { HTTP_URL, USER_ID } from './index';

export const getWritingList = async () => {
  const response = await fetch(`${HTTP_URL}/writing`);

  if (!response.ok) {
    throw Error('Failed to fetch estimate data');
  }

  const data = await response.json();
  return data.data;
};
