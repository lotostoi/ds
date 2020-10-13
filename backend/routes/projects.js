const { Router } = require('express')
const router = Router()



router.post('/project/add', async (req, res) => {
    console.log(req.body)

    res.json({ ok: 'ok' })
    res.end()
})


module.exports = router