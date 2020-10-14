
const PORT = 3000

const isProd = process.isProduction

const nameBD = isProd ? 'ds-control' : 'kraken'

const path = require('path')

const express = require('express')

const mongoose = require('mongoose')

const commonRoutes = require('./routes/commonRoutes')

const picturesRoutes = require('./routes/pictures')

const getImgRoutes = require('./routes/getImg')

const delByIdRoutes = require('./routes/delById')

const projectsRoutes = require('./routes/projects')

const bodyParser = require('body-parser')

const app = express()

const history = require('connect-history-api-fallback');

app.use(history())

app.use(express.static(path.join(__dirname, 'static')));

app.use(express.static(path.join(__dirname, 'files')));

app.use(express.static(path.join(__dirname, 'img')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json())

app.use(delByIdRoutes)

app.use('/rout/getPhoto', getImgRoutes)

app.use('/rout/files', picturesRoutes)

app.use('/rout', projectsRoutes)

app.use(commonRoutes)

async function start() {

    try {

        const link = `mongodb+srv://lotos_toi:G0fdQ7GKoTODMmRM@cluster0.n6oze.mongodb.net/${nameBD}?retryWrites=true&w=majority`

        await mongoose.connect(link, { useNewUrlParser: true, useUnifiedTopology: true })

        app.listen(PORT, () => console.log('Server has been started...'))

    }
    catch (e) {
        console.error(e)
    }

}

start()





