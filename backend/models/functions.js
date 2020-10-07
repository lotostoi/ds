const path = require('path')
const fs = require('fs')

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