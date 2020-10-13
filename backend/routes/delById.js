const { Router } = require('express')
const router = Router()
const Image = require('../models/objImg')
const { delImg } = require('../models/functions')



router.delete('/rout/del/:id', async (request, respons) => {

    // console.log(id)

    let images = await Image.find()

    let id = request.params.id

    let index = images.findIndex(e => e._id.toString() === id.toString())

    let imgObj = {}

    try {

        // Saving object by ID to rolback by error in deleting file of image
        imgObj = { ... await Image.findById(id) }

        await Image.deleteOne({ _id: id })

    } catch (e) {
        respons.json({ 'error': `${e}` })
    }

    try {

        // deleteing file of image
        await delImg(images[index].linkBack)

        respons.json({ status: 'Succes' })
    }
    catch (err) {

        // if error thet imgObj is puting back in data base
        let newObj = { ...imgObj._doc }

        delete newObj._id

        console.log(newObj)

        let obj = new Image(newObj)

        await obj.save()

        respons.json({ 'status': `${err}` })
    }

})


module.exports = router