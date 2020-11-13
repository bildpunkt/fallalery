const { TestScheduler } = require('jest')
const app = require('../../src/app')
const request = require('supertest')(app)

test('unauthenticated request should fail', async () => {
  const response = await request.get('/')

  expect(response.status).toBe(401)
})

test('authenticated request (using query parameter) should pass', async () => {
  const response = await request.get('/?key=testkey')

  expect(response.status).toBe(200)
})

test('authenticated request (using authorization header) should pass', async () => {
  const response = await request
    .get('/')
    .set('Authorization', 'Basic dXNlcm5hbWU6dGVzdGtleQ==')

  expect(response.status).toBe(200)
})

test('authenticated request (using API key header) should pass', async () => {
  const response = await request
    .get('/')
    .set('X-Redmine-API-Key', 'testkey')

  expect(response.status).toBe(200)
})