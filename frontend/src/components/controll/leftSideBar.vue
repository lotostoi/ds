<template>
  <div class="ds-left">
    <router-link
      :to="{ name: 'DsDashboard' }"
      class="ds-left__fieldMenu"
      exact
      active-class="ds-left__fieldMenu-active"
    >
      <i class="fa fa-qrcode" aria-hidden="true"></i> Dashboard
    </router-link>
    <router-link
      :to="{ name: 'DsContent' }"
      class="ds-left__fieldMenu"
      exact
      active-class="ds-left__fieldMenu-active"
    >
      <i class="fa fa-file-image-o" aria-hidden="true"></i> Files
    </router-link>
    <projects />
    <m-add-devise>
      <button @click="off">Close</button>
    </m-add-devise>
  </div>
</template>

<script>
import MAddDevise from "@/components/controll/addDevise";
import DropPanel from "@/components/controll/dropPanel";
import FirstLevelMenu from "@/components/controll/menu/first-level-menu";
import SecondLevelMenu from "@/components/controll/menu/second-level-menu";
import ThirdLevelMenu from "@/components/controll/menu/third-level-menu";
import FourthLevelMenu from "@/components/controll/menu/fourth-level-menu";
import Projects from "@/components/controll/menu/Projects";
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

  height: 8px;

  background-color: $baseColor;
}

.ds-left {
  overflow-x: hidden;
  display: flex;
  min-width: 300px;
  border-right: 1px solid #000;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
  &__fieldMenu {
    padding: 10px 10px 10px 5px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    color: $fontColor;
    box-sizing: border-box;
    &:hover {
      color: $textHover;
    }
    & > i {
      padding: 10px;
    }
  }
  &__fieldMenu-active {
    color: $textActive;
  }
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
