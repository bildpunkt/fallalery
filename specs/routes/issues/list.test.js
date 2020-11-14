const request = require('../../helper/request')

test('issue listing endpoint returns 406 on unknown format', async () => {
  const response = await request.get('/issues.php')

  expect(response.status).toBe(406)
})