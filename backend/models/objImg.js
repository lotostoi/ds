const uid = require('uniqid');
const path = require('path')
const sizeOf = require('image-size');
const fs = require('fs');


const { Schema, model } = require('mongoose')

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


