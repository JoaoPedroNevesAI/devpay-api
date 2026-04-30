const request = require('supertest');
const app = require('../src/app');

describe('GET /health', () => {
  test('deve retornar status 200', async () => {
    const response = await request(app).get('/health');

    expect(response.statusCode).toBe(500);
    expect(response.body.status).toBe('ok');
  });
});