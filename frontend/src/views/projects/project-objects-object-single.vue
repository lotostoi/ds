<template>
  <div class="page-content">
    <header-for-content :show="false"> Single : {{ link }} </header-for-content>
    <files :pictures="content" />
    <footer-for-body />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Files from "@/components/controll/files";
import HeaderForContent from "@/components/controll/headerForContent";
import FooterForBody from "@/components/controll/footerForBody";
import { findById } from "@/functions/functions";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  components: { Files, HeaderForContent, FooterForBody },
  data: () => ({
    link: "",
  }),
  mounted() {
    this.link = this.$router.currentRoute.path.replace("/controll", "");
  },
  watch: {
    title() {
      this.link = this.$router.currentRoute.path.replace("/controll", "");
    },
  },
  computed: {
    ...mapGetters({
      projects: "menuProjects/projects",
    }),
    content() {
      let arr =
        findById(this.projects, this.id) &&
        findById(this.projects, this.id).fields
          ? findById(this.projects, this.id).fields
          : [];
      return arr;
    },
  },
};
</script>

<style lang="scss" scoped>
.page-content {
  display: flex;
  width: 100%;
  flex-direction: column;
}
</style>