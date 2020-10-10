
const { getLink } = require('../models/functions')
const { Router } = require('express')
const router = Router()

router.get('*', (req, res) => {
  if (req.path.includes('files')) {

    res.sendFile(getLink(req.path))
  }
  else {

    res.end(req.path)
  }
})

module.exports = router