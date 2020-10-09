/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const uid = __webpack_require__(10);
const path = __webpack_require__(1)
const sizeOf = __webpack_require__(6);
const fs = __webpack_require__(3);


const { Schema, model } = __webpack_require__(4)

let Image = new Schema({
    time: { type: String, required: true },
    name: { type: String, required: true },
    realName: { type: String, required: true },
    size: { type: Number, required: true },
    type: { type: String, required: true },
    path: { type: String, required: true },
    linkBack: { type: String, required: true },
    link: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    k: { type: Number, required: true },
    active: { type: Boolean, required: true },
    show: { type: Boolean, required: true }
})

module.exports = model('Image', Image) 




/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const path = __webpack_require__(1)
const fs = __webpack_require__(3)

module.exports = {

    getName(str) {
        let arr = str.split('/')
        let lastIndex = arr.length - 1
        return arr[lastIndex]
    },

    getLink(str) {
        let arr = str.split('/')
        let lastIndex = arr.length - 1
        return path.join(__dirname, '..', arr[lastIndex - 1], arr[lastIndex])
    },

    delImg(link) {
        return new Promise((resolve, reject) => {
            fs.unlink(link, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve('ok')
                }
            })
        })
    }
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("image-size");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {



const PORT = 3888

const isProd = true

const nameBD = isProd ? 'ds-control' : 'kraken'

const path = __webpack_require__(1)

const express = __webpack_require__(0)

const mongoose = __webpack_require__(4)

const commonRoutes = __webpack_require__(8)

const picturesRoutes = __webpack_require__(9)

const getImgRoutes = __webpack_require__(13)

const delByIdRoutes = __webpack_require__(14)

const addDeviceRoutes = __webpack_require__(16)

const bodyParser = __webpack_require__(17)

const app = express()

const history = __webpack_require__(18);

app.use(history())

app.use(express.static(path.join(__dirname, 'static')));

app.use(express.static(path.join(__dirname, 'files')));

app.use(express.static(path.join(__dirname, 'img')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(delByIdRoutes)

app.use('/rout/getPhoto', getImgRoutes)

app.use('/rout/files', picturesRoutes)

app.use('/rout/addDevise', addDeviceRoutes)

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







/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


const { getLink } = __webpack_require__(5)
const { Router } = __webpack_require__(0)
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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


const { Router } = __webpack_require__(0)
const router = Router()
const path = __webpack_require__(1)
const Image = __webpack_require__(2)
const sizeOf = __webpack_require__(6);
const multer = __webpack_require__(11)
const moment = __webpack_require__(12)



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
    console.log('test')
    let link = path.join(__dirname, '..', 'files', req.file.filename)
    let d = new Date()
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

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("uniqid");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


const { Router } = __webpack_require__(0)
const router = Router()
const Image =  __webpack_require__(2)
const Pictures = __webpack_require__(2)

router.post('/', async (request, respons) => {
    try {
        let images = await Image.find()
        respons.send(images)
    } catch (e) {
        respons.end(`<h1>We have error: "${e}" </h1>`);
    }
})


module.exports = router

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

const { Router } = __webpack_require__(0)
const router = Router()
const path = __webpack_require__(1)
const Image = __webpack_require__(2)
const fs = __webpack_require__(3)

const { delImg } = __webpack_require__(5)
const { connected } = __webpack_require__(15)


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

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("process");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

const { Router } = __webpack_require__(0)
const router = Router()



router.post('/', async (req, res) => {
    console.log(req.body)
    //res.status(500)
  
    res.json({ok: 'ok'})
    res.end()
})


module.exports = router

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("connect-history-api-fallback");

/***/ })
/******/ ]);