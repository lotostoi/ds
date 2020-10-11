<template>
  <div class="page-content">
    <h3 class="page-content__h3">Welcome 3DMark</h3>
    <div class="page-content__content">
      <nav class="page-content__nav">
        <a href="#">Yacht FRASER</a>
        <a href="#">ArtGallery</a>
        <a href="#">Space</a>
        <a href="#">Фото выставка город Артём</a>
        <button>
          <span>Добавить проект</span>
          <span>+</span>
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page-content {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  background-color: $baseColor;
  box-sizing: border-box;
  flex-direction: column;
  color: $fontColor;
  &__h3 {
    border: 1px solid $borderDark;
    margin: 0;
    color: $fontColor;
    font-size: 16px;
    height: 50px;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__content {
    height: 100%;
    padding: 45px;
    background-color: $baseColorDark;
    justify-content: flex-start;
    align-items: flex-start;
  }
  &__nav {
    max-width: 250px;
    display: flex;
    flex-direction: column;
    & > a {
      // text-decoration: none;
      margin: 7px 0;
      color: $fontColor;
      line-height: 24px;
      text-align: left;
      &:hover {
        color: $textHover;
      }
      &.active {
        color: $textActive;
      }
    }
    & > bUtton {
      margin: 7px 0;
      display: flex;
      align-items: center;
      max-width: 244px;
      min-height: 30px;
      background-color: #161616;
      border: 1px solid #000000;
      color: $fontColor;
      padding: 0 15px;
      outline: none;
      justify-content: space-between;
      &:hover {
        border: 1px solid #7a7a7a;
      }
      &:active {
        transform: scale(0.98);
      }
    }
  }
}
</style>
