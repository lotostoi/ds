const { Router } = require('express')
const router = Router()



router.post('/', async (req, res) => {
    console.log(req.body)
    //res.status(500)
  
    res.json({ok: 'ok'})
    res.end()
})


module.exports = router