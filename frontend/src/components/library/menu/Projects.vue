<template>
  <div class="cont-menu-projects">
    <first-level-menu
      :borderNo="'left right top'"
      title="Projects"
      toLink="DsProjects"
      :content="projects.length !== 0"
    >
      <second-level-menu
        :borderNo="'all'"
        :title="field.title"
        :toLink="field.link"
        v-for="(field, j) of projects"
        :key="field.title + j"
        :content="field.length !== 0"
      >
        <third-level-menu
          :borderNo="'all'"
          :title="field.title"
          :toLink="field.link"
          v-for="(field, j) of field.fields"
          :key="field.title + j"
          :content="field.fields.length !== 0"
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
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({}),
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
  computed: {
    ...mapGetters({
      projects: "menuProjects/projects",
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>
