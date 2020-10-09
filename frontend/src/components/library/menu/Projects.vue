<template>
  <div class="cont-menu-projects">
    <first-level-menu
      :borderNo="'left right top'"
      :title="testObj.title"
      :toLink="testObj.link"
    >
      <second-level-menu
        :borderNo="'all'"
        :title="field.title"
        :toLink="field.link"
        v-for="(field, j) of testObj.fields"
        :key="field.title + j"
      >
        <third-level-menu
          :borderNo="'all'"
          :title="field.title"
          :toLink="field.link"
          v-for="(field, j) of field.fields"
          :key="field.title + j"
        >
          <fourth-level-menu
            :borderNo="'all'"
            :title="field.title"
            :toLink="field.link"
            :type="field.type"
            v-for="(field, j) of field.fields"
            :key="field.title + j"
          >
          </fourth-level-menu>
        </third-level-menu>
      </second-level-menu>
    </first-level-menu>
  </div>
</template>

<script>
import MAddDevise from "@/components/library/addDevise";
import DropPanel from "@/components/library/dropPanel";
import FirstLevelMenu from "@/components/library/menu/first-level-menu";
import SecondLevelMenu from "@/components/library/menu/second-level-menu";
import ThirdLevelMenu from "@/components/library/menu/third-level-menu";
import FourthLevelMenu from "@/components/library/menu/fourth-level-menu";
import { mapActions } from "vuex";

export default {
  data: () => ({
    testObj: {
      title: "Pojects",
      link: "DsProjects",
      fields: [
        {
          title: "Yacht FRASER",
          link: "DsPlug",
          fields: [
            {
              title: "Device",
              link: "DsPlug",
            },
            {
              title: "Display",
              link: "DsPlug",
            },
            {
              title: "Interaction",
              link: "DsPlug",
              fields: [
                { title: "Main Video", type: "S", link: null },
                { title: "Main Name Yacht", type: "S", link: null },
                { title: "Brief specification", type: "S", link: null },
                {
                  title: "Additional photo of the inter...",
                  type: "S",
                  link: null,
                },
                {
                  title: "Additional photo of the inter...",
                  type: "S",
                  link: null,
                },
                {
                  title: "Additional photo of the inter...",
                  type: "S",
                  link: null,
                },
                {
                  title: "Additional photo of the inter...",
                  type: "S",
                  link: null,
                },
                {
                  title: "Additional photo of the inter...",
                  type: "S",
                  link: null,
                },
                {
                  title: "Additional photo of the inter...",
                  type: "S",
                  link: null,
                },
                {
                  title: "Additional photo of the inter...",
                  type: "S",
                  link: null,
                },
                {
                  title: "DECK PLANS + specification",
                  type: "MS",
                  link: null,
                },
                { title: "Test", type: "S+", link: null },
                { title: "Test2", type: "W", link: null },
              ],
            },
          ],
        },
        {
          title: "ArtGallery",
          link: "DsPlug",
          fields: [
            {
              title: "Device",
              link: "DsPlug",
            },
            {
              title: "Display",
              link: "DsPlug",
            },
            {
              title: "Interaction",
              link: "DsPlug",
            },
          ],
        },
        {
          title: "Space",
          link: "DsPlug",
        },
        {
          title: "Фото выставка город Артём",
          link: "DsPlug",
        },
      ],
    },
  }),
  components: {
    MAddDevise,
    DropPanel,
    FirstLevelMenu,
    SecondLevelMenu,
    ThirdLevelMenu,
    FourthLevelMenu,
  },
  methods: {
    ...mapActions({
      on: "modWin/on",
      off: "modWin/off",
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>
