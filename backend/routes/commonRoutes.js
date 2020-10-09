
const { getLink } = require('../models/functions')
const { Router } = require('express')
const router = Router()

router.get('*', (req, res) =>
{
  if (req.path.includes('files')) {
    console.log('dd');
    res.sendFile(getLink(req.path))
  }
  else {
    console.log(req.path);
    res.end(req.path)
  }
})

module.exports = router