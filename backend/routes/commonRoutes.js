
const { getLink } = require('../models/functions')
const { Router } = require('express')
const router = Router()

router.get('*', (req, res) =>
{

  res.sendFile(getLink(req.path))
})

module.exports = router