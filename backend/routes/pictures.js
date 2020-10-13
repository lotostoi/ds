
const { Router } = require('express')
const router = Router()
const path = require('path')
const Image = require('../models/objImg')
const ExifImage = require('exif').ExifImage;
const sizeOf = require('image-size');
const multer = require('multer')
const moment = require('moment')
sizeOf.setConcurrency(123456)


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', 'files'))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

let upload = multer({ storage: storage })

router.post('/', upload.single('file'), async (req, res) => {

    let link = path.join(__dirname, '..', 'files', req.file.filename)
    try {
        new ExifImage({ image: link }, function (error, exifData) {
            if (error)
                console.log('Error: ' + error.message);
            else
                console.log(exifData); // Do something with your data!
        });
    } catch (error) {
        console.log('Error: ' + error.message);
    }

    let obj = new Image({
        time: moment().format('MMMM Do YYYY, h:mm:ss a'),
        name: `${moment().format("Do MMM YYYY")}`,
        realName: req.file.filename,
        size: req.file.size,
        type: req.file.mimetype,
        path: req.file.path,
        linkBack: link,
        link: path.join('rout', 'files', req.file.filename),
        width: sizeOf(link).width,
        height: sizeOf(link).height,
        k: sizeOf(link).width / sizeOf(link).height,
        active: false,
        show: true
    })
    try {
        await obj.save()
        res.send({ status: 'ok', text: 'Success' });
    } catch (e) {
        console.error(e)
        res.send({ status: 'error', text: 'Error' });
    }

})

router.post('/rout/getPhoto', async (request, respons) => {
    try {
        let images = await Pictures.readFile()
        respons.send(images)
    } catch (e) {
        respons.end(`<h1>We have error: "${e}" </h1>`);
    }
})


module.exports = router