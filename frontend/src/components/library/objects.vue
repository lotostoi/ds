<template>
  <div class="objects">
    <header class="objects__header"></header>
    <div class="objects__content"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.objects {
  display: grid;
  grid-template-rows: [header] minmax(46px, max-content) [content] minmax(
      1fr,
      1fr
    );
  grid-template-areas: "header" "content";
  &__header {
    grid-area: header;
    background-color: $baseColor;
  }
  &__content {
    grid-area: content;
    background-color: $baseColorDark;
  }
}
</style>
