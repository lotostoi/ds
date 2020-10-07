<template>
  <div class="lib-content">
    <h1>Objects</h1>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.lib-content {
  padding: 20px;
  display: flex;
  height: 100%;
  width: 100%;
  transition: background-color 0.5s linear;
  flex-wrap: wrap;
  overflow-y: auto;
  justify-content: space-around;
  align-items: flex-start;
  background-color: white;
  background-color:$baseColor;
  &>h1 {
      color: white;
  }
}

</style>
