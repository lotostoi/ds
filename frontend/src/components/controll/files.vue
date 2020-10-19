<template>
  <div
    class="controll-content"
    @dragover.prevent="onDragOver"
    @dragleave.prevent="onDragLeave"
    @drop.prevent="drop"
    @click="delSel($event)"
  >
    <div class="controll-cont-img" v-for="img in pictures" :key="img._id">
      <drag
        v-if="img.show"
        :transfer-data="{ example: img }"
        :style="`height:${100 + 2 * range}px; width:${
          (100 + 2 * range) * img.k
        }px`"
        class="div-img"
      >
        <img
          :src="img.link"
          :id="img.link"
          :data-id="img._id"
          class="controll-img"
          :style="img.width > img.height ? 'width: 100%;' : 'height: 100%;'"
          :class="img.active ? 'controll-img-active ' : ''"
          alt="img"
          :name="img.link"
          draggable="true"
          @click="clickImg($event, img._id)"
        />
      </drag>
      <span v-if="img.show">{{ img.name }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Drag, Drop } from "vue-drag-drop";
import { getContent } from "@/functions/functions";
import DsProgressBar from "@/components/ds-progressbar";
import FooterForBody from "@/components/controll/footerForBody";

export default {
  data() {
    return {
      rout: this.$prefixForProxy + "/files",
      dropZone: null,
    };
  },
  props: {
    type: {
      type: String,
      default: "additional",
    },
    pictures: {
      type: Array,
      default: [],
    },
  },
  components: { Drag, Drop, DsProgressBar, FooterForBody },
  mounted() {
    this.dropZone = document.querySelector(".controll-content");
  },
  methods: {
    ...mapActions({
      getPictures: "libPictures/getPictures",
      getImage: "libImageDetails/getImage",
      addToSelected: "libSelected/addToSelected",
      delSelected: "libSelected/delSelected",
      clearSelected: "libSelected/clearSelected",
      allSelected: "libSelected/allSelected",

      valProgBar: "progresBar/valProgBar",
      cRange: "libScale/cRange",
    }),
    onDragOver(e) {
      return false;
    },
    onDragLeave(e) {
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
      if (this.type === "base") {
        !e.ctrlKey && this.clearSelected();
        e.ctrlKey &&
          e.target.classList.contains("lib-content") &&
          this.allSelected();
      }
    },

    async drop(e) {
      if (this.type === "base") {
        let arr = Object.values(e.dataTransfer.files);
        await getContent(arr, this.rout, this.valProgBar);
        await this.getPictures();
        this.valProgBar(0);
      }
    },
  },
  computed: {
    ...mapGetters({
      range: "libScale/range",
      oneImage: "libImageDetails/imageDetails",
      getImageId: "libPictures/getImageId",
      selected: "libSelected/selected",
      allow: "libSelected/allow",
    }),
  },
};
</script>

<style lang="scss" scoped>
.controll-content {
  padding: 20px;
  display: flex;
  height: calc(100vh - #{$heightHeader} - 100px);
  width: 100%;
  flex-wrap: wrap;
  overflow-y: auto;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #131313;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 5px;
    /* ширина для вертикального скролла */
    height: 8px;
    /* высота для горизонтального скролла */
    background-color: $baseColor;
  }
}

.controll-cont-img {
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  & > .div-img {
    margin: 10px;
    padding: 2px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #131313;
    background-image: url("~@/assets/img/loader.svg");
    background-repeat: no-repeat;
    background-position: center;
    outline: 1px solid rgba(128, 128, 128, 0.397);
  }
  & > span {
    margin: 10px;
    color: white;
  }
}

.controll-img {
  width: 100%;
}

.controll-img-active {
  outline: 5px solid burlywood;
}

.controll-body-active {
  background-color: #363636fb;
}
</style>