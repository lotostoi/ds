<template>
  <div class="cont">
    <v-progress-linear
      v-if="true"
      :value="valueProgresBar"
      absolute
      :background-opacity="0"
      color="prog-color"
    ></v-progress-linear>
    <div class="lib-body-header">
      <h2>Files</h2>
      <button
        @click="delSelected"
        class="lib-dell-All"
        :class="allow || selected.length == 0 ? 'disabled' : ''"
        :disabled="allow || selected.length == 0"
      >
        <i class="fa fa-trash"></i>
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
        <div
          v-if="img.show"
          :style="`height:${100 + 2 * range}px; width:${
            (100 + 2 * range) * img.k
          }px`"
          class="div-img"
        >
          <img
            id="img.link"
            :data-id="img._id"
            class="lib-img"
            :class="img.active ? 'lib-img-active ' : ''"
            v-lazy="img.link"
            alt="img"
            :name="img.link"
            draggable="true"
            @click="clickImg($event, img._id)"
          />
        </div>
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

import { getContent } from "@/addtools/addFunctions";

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
      cRange: "libScale/cRange",
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
      allow: "libSelected/allow",
      show: "progresBar/show",
      valueProgresBar: "progresBar/valueProgresBar",
    }),
  },
};
</script>

<style lang="scss" scoped>
.cont {
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
  & > .lib-dell-All {
    display: flex;
    margin: 0 20px 0 0;
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
  transition: background-color 0.5s linear;
  flex-wrap: wrap;
  overflow-y: auto;
  justify-content: space-around;
  align-items: flex-start;
  background-color: rgb(65, 51, 51);
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

  & > span {
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
.lib-body-footer {
  width: 100%;
  display: flex;
  padding: 0 20px;
  min-height: 50px;
  border-top: 1px solid black;
  align-items: center;
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
