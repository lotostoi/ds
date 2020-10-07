

const PORT = 3000

const path = require('path')

const express = require('express')

const mongoose = require('mongoose')

const commonRoutes = require('./routes/commonRoutes')

const picturesRoutes = require('./routes/pictures')

const getImgRoutes = require('./routes/getImg')

const delByIdRoutes = require('./routes/delById')

const addDeviceRoutes = require('./routes/addDevice')

const bodyParser = require('body-parser')

var multer = require('multer');

const app = express()


app.use(express.static(path.join(__dirname, 'files')));

app.use(express.static(path.join(__dirname, 'img')));


app.use(bodyParser.urlencoded({ extended: false }));


app.use(delByIdRoutes)

app.use('/rout/getPhoto', getImgRoutes)

app.use('/rout/files', picturesRoutes)

app.use(commonRoutes)

app.use('/rout/addDevise', addDeviceRoutes)

async function start() {

    try {

        const link = 'mongodb+srv://lotos_toi:G0fdQ7GKoTODMmRM@cluster0.n6oze.mongodb.net/kraken?retryWrites=true&w=majority'

        await mongoose.connect(link, { useNewUrlParser: true, useUnifiedTopology: true })

        app.listen(PORT, () => console.log('Server has been started...'))

    }
    catch (e) {
        console.error(e)
    }

}


start()





