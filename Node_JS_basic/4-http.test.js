const request = require('supertest');
const app = require('./4-http');

describe('HTTP Server', () => {
  afterAll(() => {
    // Close the server after tests to prevent Jest from hanging
    app.close();
  });

  it('should return "Hello Holberton School!" for root path', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello Holberton School!');
  });

  it('should return "Hello Holberton School!" for any path', async () => {
    const res = await request(app).get('/any_endpoint');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello Holberton School!');
  });

  it('should return "Hello Holberton School!" for multiple different endpoints', async () => {
    const endpoints = ['/users', '/api/data', '/random-path'];
    
    for (const endpoint of endpoints) {
      const res = await request(app).get(endpoint);
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe('Hello Holberton School!');
    }
  });
});
