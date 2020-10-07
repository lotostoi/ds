
const { Router } = require('express')
const router = Router()
const Image =  require('../models/objImg')
const Pictures = require('../models/objImg')

router.post('/', async (request, respons) => {
    try {
        let images = await Image.find()
        respons.send(images)
    } catch (e) {
        respons.end(`<h1>We have error: "${e}" </h1>`);
    }
})


module.exports = router