const { Router } = require('express')
const router = Router()

const auth = require('../../middleware/auth')
const listRoute = require('./list')

router.use(auth)

router.get(...listRoute)

module.exports = router