
const { Schema, model } = require('mongoose')

let Project = new Schema({
    project: {
        type: Object,
        required: true
    }
})

module.exports = model('Project', Project) 
