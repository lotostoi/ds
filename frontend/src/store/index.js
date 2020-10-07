import Vue from 'vue'
import Vuex from 'vuex'

import { prefixForProxy } from "@/addtools/globalVar"

Vue.use(Vuex)



import progresBar from "@/store/progresBar"

import libScale from "@/store/library/scale"
import libPictures from "@/store/library/pictures"
import libImageDetails from "@/store/library/imageDetails.js"
import libSelected from "@/store/library/selected"

import colAddDevise from "@/store/collections/addRoutToDevise"
import modWin from "@/store/mod-win"

export default new Vuex.Store({


  modules: {
    namespaced: true,

    // module to control values of progress bar
    progresBar,

    // module to change scale of images in the library
    libScale,

    // module to getting a content
    libPictures,

    // module to getting infrom about image for right side bar
    libImageDetails,

    // module  for working with selecred images
    libSelected,

    // module for modal-window
    modWin

  },


})
