<template>
  <div class="cont">
    <b-progress
      :value="valueProgresBar"
      height="2px"
      :max="100"
      :show-progress="true"
      animated
      style="width: 100%"
    ></b-progress>
    <div class="lib-body-header">
      <h2>Files</h2>
      <button
        @click="delSelected"
        class="trash"
        :class="allow || selected.length == 0 ? 'disabled' : ''"
        :disabled="allow || selected.length == 0"
      >
        <i class="fa fa-trash" aria-hidden="true"></i>
      </button>
    </div>
    <div
      class="lib-content"
      @dragover.prevent="onDragOver"
      @dragleave.prevent="onDragLeave"
      @drop.prevent="drop"
      @click="delSel($event)"
    >
      <div class="lib-cont-img" v-for="img in pictures" :key="img._id">
        <drag
          v-if="img.show"
          :transfer-data="{ example: img }"
          :style="`height:${100 + 2 * range + 0.5}px; width:${
            (100 + 2 * range) * img.k
          }px`"
          class="div-img"
        >
          <img
            :src="img.link"
            :id="img.link"
            :data-id="img._id"
            class="lib-img"
            :style="img.width > img.height ? 'width: 100%;' : 'height: 100%;'"
            :class="img.active ? 'lib-img-active ' : ''"
            alt="img"
            :name="img.link"
            draggable="true"
            @click="clickImg($event, img._id)"
          />
        </drag>
        <span v-if="img.show">{{ img.name }}</span>
      </div>
    </div>
    <div class="lib-body-footer">
      <div class="changeScale">
        <label for="range">Scale :</label>
        <input
          type="range"
          name="randg"
          id="range"
          @input="cRange({ val: $event.target.value })"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Drag, Drop } from "vue-drag-drop";
import { getContent } from "@/addtools/addFunctions";

export default {
  data() {
    return {
      rout: this.$prefixForProxy + "/files",
      dropZone: null,
    };
  },
  components: { Drag, Drop },
  mounted() {
    this.dropZone = document.querySelector(".lib-content");
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
      cRange: "libScale/cRange",
    }),
    onDragOver(e) {
      //this.dropZone.classList.add("lib-body-active");
      return false;
    },
    onDragLeave(e) {
      //this.dropZone.classList.remove("lib-body-active");
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
      allow: "libSelected/allow",
      show: "progresBar/show",
      valueProgresBar: "progresBar/valueProgresBar",
    }),
  },
};
</script>

<style lang="scss" scoped>
// progress bar

.cont {
  width: 100%;
}

.prog-color {
  background-color: lightblue;
}

.lib-body {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  transition: background-color 0.5s linear;
  align-items: flex-start;
}

.lib-body-header {
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: $baseColor;
  & > h2 {
    display: flex;
    margin: 0 auto;
    font-size: 25px;
    color: $fontColor;
  }
  & > .trash {
    display: flex;
    margin: 0 20px 0 0;
    border: none;
    background-color: transparent;
    outline: none;
    padding: 5px;
    color: white;

    & > i {
      font-size: 30px;
      color: rgb(214, 91, 91);
      margin: 0 20px 0 20px;
    }

    &:hover > i {
      color: rgb(196, 52, 52);
    }

    &:active > i {
      color: rgb(109, 33, 33);
    }
  }

  & > .disabled {
    margin: 0 20px 0 0;
    background-color: transparent;
    outline: none;
    padding: 5px;
    color: white;
    cursor: not-allowed;

    & > i {
      font-size: 30px;
      color: rgb(133, 115, 115);
      margin: 0 20px 0 20px;
    }

    &:hover > i {
      color: rgb(133, 115, 115);
    }

    &:active > i {
      color: rgb(133, 115, 115);
    }
  }
}
.lib-content {
  padding: 20px;
  display: flex;
  height: calc(100vh - #{$heightHeader} - 100px);
  width: 100%;
  // transition: background-color 0.5s linear;
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

.lib-cont-img {
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  & > .div-img {
    padding: 1px;
    background-color: #131313;
    background-image: url("~@/assets/img/loader.svg");
    background-repeat: no-repeat;
    background-position: center;
    border: 1px solid rgba(128, 128, 128, 0.397);
  }
  & > span {
    margin: 10px;
    color: white;
  }
}

.lib-img {
  width: 100%;
}

.lib-img-active {
  outline: 5px solid burlywood;
}

.lib-body-active {
  background-color: #363636fb;
}
.lib-body-footer {
  width: 100%;
  display: flex;
  padding: 0 20px;
  min-height: 50px;
  border-top: 1px solid black;
  align-items: center;
  box-sizing: border-box;
}

.changeScale {
  display: flex;
  margin-left: auto;

  & > label {
    color: $fontColor;
  }

  & > input {
    margin-left: 10px;
  }
}
</style>
