const { Router } = require('express')
const router = Router()

router.use('/jobs', require('./jobs'))
router.use('/employers', require('./employers'))

module.exports = router