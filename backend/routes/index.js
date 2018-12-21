const router = require('express').Router()
const path = require('path')
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: false}))

router.use('/api', require('./api'))

module.exports = router