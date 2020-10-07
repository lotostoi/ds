<template>
  <div class="ds-left">
    <menu-field-first-level
      toLink="DsContent"
      borderNo="top"
      :projects="[]"
      @btnclick="test"
      >Content</menu-field-first-level
    >
    <menu-field-first-level toLink="DsGallery" :projects="[]" @btnclick="test"
      >Gallery</menu-field-first-level
    >
    <menu-field-first-level toLink="DsObjects" :projects="[]" @btnclick="test"
      >Objects</menu-field-first-level
    >
    <menu-field-first-level toLink="DsProjects" :projects="array"
      >Project</menu-field-first-level
    >
    <footer class="ds-left-footer">
      <m-add-devise>
        <button @click="off">Close</button>
      </m-add-devise>
      <button class="ds-left-add-device" @click="on">+</button>
    </footer>
  </div>
</template>

<script>
import MAddDevise from "@/components/library/addDevise";
import DropPanel from "@/components/library/dropPanel";
import MenuFieldFirstLevel from "@/components/library/menu/field-menu-firts";
import { mapActions } from "vuex";

export default {
  data: () => ({
    array: [
      {
        name: "Yacht FRASER",
        fields: [
          { title: "Device" },
          { title: "Display" },
          { title: "Interaction" },
        ],
      },
      {
        name: "ArtGallery",
        fields: [
          { title: "Device" },
          { title: "Display" },
          { title: "Interaction" },
        ],
      },
      { name: "Space" },
      { name: "Фото выставка город Артём" },
    ],
  }),
  components: {
    MAddDevise,
    DropPanel,
    MenuFieldFirstLevel,
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
  width: 3px !important; /* ширина для вертикального скролла */
  height: 8px; /* высота для горизонтального скролла */
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
