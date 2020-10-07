<template>
<div class="lib-content" @dragover.prevent="onDragOver" @dragleave.prevent="onDragLeave" @drop.prevent="drop" @click="delSel($event)">
    <div class="lib-cont-img" v-for="img in pictures" :key="img._id">
        <div v-if="img.show" :style="`height:${100+2*range}px; width:${(100+2*range)*img.k}px`" class="div-img">
            <img id="img.link" :data-id="img._id" class="lib-img" :class="img.active ? 'lib-img-active ':''" v-lazy="img.link" alt="img" :name="img.link" draggable="true" @click="clickImg($event,img._id)" />
        </div>
        <span v-if="img.show">{{img.name}}</span>
    </div>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex";

import {
    getContent
} from "@/addtools/addFunctions";

export default {
    data() {
        return {
            rout: this.$prefixForProxy + "/files",
            dropZone: null,
          };
    },

    mounted() {
        this.dropZone = document.querySelector(".lib-content");
        console.log(this.$store);
    },
    methods: {
        ...mapActions({
            getPictures: "libPictures/getPictures",
            // dellAll: "delete",
            getImage: "libImageDetails/getImage",
            addToSelected: "libSelected/addToSelected",
            delSelected: "libSelected/delSelected",
            clearSelected: "libSelected/clearSelected",
            allSelected: "libSelected/allSelected",
            showON: "progresBar/showON",
            showOFF: "progresBar/showOFF",
            valProgBar: "progresBar/valProgBar",
        }),
        onDragOver(e) {
            this.dropZone.classList.add("lib-body-active");
            return false;
        },
        onDragLeave(e) {
            this.dropZone.classList.remove("lib-body-active");
            return false;
        },

        clickImg(e, id) {
            if (e.ctrlKey) {
                this.addToSelected(id);
            } else {
                this.getImage(id);
            }
        },

        delSel(e) {
            !e.ctrlKey && this.clearSelected();
            e.ctrlKey &&
                e.target.classList.contains("lib-content") &&
                this.allSelected();
        },

        async drop(e) {
            let arr = Object.values(e.dataTransfer.files);

            this.showON();

            await getContent(arr, this.rout, this.valProgBar);

            await this.getPictures();

            this.showOFF();

            this.valProgBar(0);
        },
    },
    computed: {
        ...mapGetters({
            range: "libScale/range",
            pictures: "libPictures/pictures",
            oneImage: "libImageDetails/imageDetails",
            getImageId: "libPictures/getImageId",
            selected: "libSelected/selected",
        }),
    },
};
</script>

<style lang="scss" scoped>
.lib-content {
    padding: 20px;
    display: flex;
    height: 100%;
    width: 100%;
    transition: background-color 0.5s linear;
    flex-wrap: wrap;
    overflow-y: auto;
    justify-content: space-around;
    align-items: flex-start;
    background-color: rgb(65, 51, 51);
}

.lib-cont-img {
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    &>span {
        margin: 10px;
        color: white;
    }
}

.lib-img {
    user-select: all;
    margin: auto;
    width: 30px;
    height: 30px;
}

.lib-img-active {
    outline: 5px solid burlywood;
}

.lib-img[lazy="loaded"] {
    width: 100%;
    height: 100%;
}

.lib-body-active {
    background-color: #363636fb;
}
</style>
