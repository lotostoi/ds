<template>
  <div class="ds-left">
    <first-level-menu
      :borderNo="'left right top'"
      title="Files"
      toLink="DsContent"
    ></first-level-menu>
    <first-level-menu
      :borderNo="'left right top'"
      title="Gallery"
      toLink="DsGallery"
    ></first-level-menu>
    <first-level-menu
      :borderNo="'left right top'"
      title="Objects"
      toLink="DsObjects"
    ></first-level-menu>
    <projects />
    <m-add-devise>
      <button @click="off">Close</button>
    </m-add-devise>
  </div>
</template>

<script>
import MAddDevise from "@/components/library/addDevise";
import DropPanel from "@/components/library/dropPanel";
import FirstLevelMenu from "@/components/library/menu/first-level-menu";
import SecondLevelMenu from "@/components/library/menu/second-level-menu";
import ThirdLevelMenu from "@/components/library/menu/third-level-menu";
import FourthLevelMenu from "@/components/library/menu/fourth-level-menu";
import Projects from "@/components/library/menu/Projects";
import { mapActions } from "vuex";

export default {
  components: {
    MAddDevise,
    DropPanel,
    FirstLevelMenu,
    SecondLevelMenu,
    ThirdLevelMenu,
    FourthLevelMenu,
    Projects,
  },
  methods: {
    ...mapActions({
      on: "modWin/on",
      off: "modWin/off",
    }),
    test() {
      console.log("test");
    },
  },
};
</script>

<style lang="scss" scoped>
.yellow {
  background-color: yellow;
}

::-webkit-scrollbar {
  width: 1px !important;
  /* ширина для вертикального скролла */
  height: 8px;
  /* высота для горизонтального скролла */
  background-color: #130b0a;
}

.ds-left {
  display: flex;
  min-width: 300px;
  border-right: 1px solid #000;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
}

.ds-left-footer {
  margin-top: auto;
  display: flex;
  padding: 0 20px;
  min-height: 50px;
  border-top: 1px solid black;
  align-items: center;
}

.addlinks {
  margin-left: 20px;
  display: flex;
  justify-content: flex-start;
  font-size: 15px;
}

.mainLink {
  text-decoration: none;
  color: $fontColor;
  text-align-last: left;
}

.ds-left-add-device {
  width: 30px;
  height: 30px;
  outline: none;
  background-color: $buttonColor;
  color: $buttonTextColor;

  &:hover {
    color: $textHover;
  }

  &:active {
    transform: scale(0.9);
  }
}
</style>
