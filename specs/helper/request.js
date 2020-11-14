const app = require('../../src/app')
const supertest = require('supertest')(app)

const hook = (method) => (args) =>
  supertest
    [method](args)
    .set('X-Redmine-API-Key', `fallalery-test-key`)

const request = {
  post: hook('post'),
  get: hook('get'),
  put: hook('put'),
  delete: hook('delete'),
}

module.exports = request