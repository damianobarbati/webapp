import { createMocks } from 'node-mocks-http';
import handleAnimal from '@/pages/api/[animal]';

describe('/api/[animal]', () => {
  test('returns a message with the specified animal', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        animal: 'dog',
      },
    });

    await handleAnimal(req, res);

    const status = res._getStatusCode();
    const body = JSON.parse(res._getData());

    expect(status).toBe(200);
    expect(body).toEqual({
      message: 'Your favorite animal is dog',
    });
  });
});
