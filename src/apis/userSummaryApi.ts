import { HTTP_URL, USER_ID } from './index';

export const postSummary = async (
  userId: number,
  writingId: number,
  summary: string
) => {
  const response = await fetch(`${HTTP_URL}/summary/user`, {
    method: 'POST',
    body: JSON.stringify({
      // 요청 본문을 문자열로 변환
      userId: userId,
      writingId: writingId,
      mySummary: summary,
    }),
  });

  if (!response.ok) {
    throw Error('Failed to fetch estimate data');
  }

  const data = await response.json();
  return data.data;
};
