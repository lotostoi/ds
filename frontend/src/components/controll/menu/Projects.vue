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
            v-for="field of field.fields"
            :key="field.id"
            :id="field.id"
            :content="field.fields.length !== 0"
          >
            <fifth-level-menu
              :borderNo="'all'"
              :title="field.name"
              :toLink="''"
              :type="field.type"
              v-for="field of field.fields"
              :key="field.id"
              :id="field.id"
            >
            </fifth-level-menu>
          </fourth-level-menu>
        </third-level-menu>
      </second-level-menu>
    </first-level-menu>
  </div>
</template>

<script>
import MAddDevise from "@/components/controll/addDevise";
import DropPanel from "@/components/controll/dropPanel";
import FirstLevelMenu from "@/components/controll/menu/first-level-menu";
import SecondLevelMenu from "@/components/controll/menu/second-level-menu";
import ThirdLevelMenu from "@/components/controll/menu/third-level-menu";
import FifthLevelMenu from "@/components/controll/menu/fifth-level-menu";
import FourthLevelMenu from "@/components/controll/menu/fourth-level-menu";
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
    FifthLevelMenu,
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
