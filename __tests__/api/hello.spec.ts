import { createMocks } from 'node-mocks-http';
import handleHello from '@/pages/api/hello';

describe('hello', () => {
  it('dummy test', () => {
    const price = 5.0;
    const quantity = 2;
    expect(price * quantity).toEqual(10);
  });

  it('handler', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        animal: 'dog',
      },
    });

    await handleHello(req, res);

    const status = res._getStatusCode();
    const body = JSON.parse(res._getData());

    expect(status).toBe(200);
    expect(body).toEqual({ name: 'John Doe' });
  });
});
