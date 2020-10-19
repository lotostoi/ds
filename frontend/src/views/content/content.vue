<template>
  <div class="cont">
    <ds-progress-bar />
    <header-for-content>Files</header-for-content>
    <files :type="'base'" :pictures="pictures" />
    <footer-for-body />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DsProgressBar from "@/components/ds-progressbar";
import FooterForBody from "@/components/controll/footerForBody";
import Files from "@/components/controll/files";
import HeaderForContent from "@/components/controll/headerForContent";

export default {
  data() {
    return {
      rout: this.$prefixForProxy + "/files",
      dropZone: null,
    };
  },
  components: { DsProgressBar, FooterForBody, Files, HeaderForContent },

  computed: {
    ...mapGetters({
      pictures: "libPictures/pictures",
    }),
  },
};
</script>

<style lang="scss" scoped>
.cont {
  width: 100%;
}
</style>
