<template>
  <div class="page-content">
    <header-for-content :show="false">Projects</header-for-content>
    <div class="page-content__content">
      <transition-group
        enter-active-class="left-right-enter"
        leave-active-class="left-right-leave"
        tag="nav"
        v-if="projects.length"
        class="page-content__nav"
      >
        <router-link
          href="#"
          v-for="(project, i) in projects"
          :key="i"
          :to="project.link"
          >{{ project.title }}</router-link
        >
      </transition-group>
      <p v-else>Create project...</p>
      <hr />
      <input
        type="text"
        class="page-content__input"
        placeholder="Project's name"
        v-model="value"
      />
      <button
        class="page-content__button"
        :disabled="!valid"
        :class="currentClass"
        @click="addProject(value)"
      >
        <span>Add project</span>
        <span>+</span>
      </button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import HeaderForContent from "@/components/controll/headerForContent";
export default {
  data: () => ({
    value: "",
  }),
  methods: {
    ...mapActions({
      addProject: "menuProjects/addProject",
    }),
  },
  components: { HeaderForContent },
  computed: {
    ...mapGetters({
      projects: "menuProjects/projects",
    }),
    valid() {
      return /^[A-zА-я0-9_\- ]{2,30}$/gi.test(this.value);
    },
    currentClass() {
      return this.valid ? "active" : " disabled";
    },
  },
};
</script>

<style lang="scss" scoped>
hr {
  background-color: gray;
}
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
  }
  &__input {
    width: 244px;
    margin: 7px 0;
    display: flex;
    align-items: center;
    max-width: 244px;
    min-height: 30px;
    background-color: #c5c5c5;
    border: 1px solid #000000;
    color: $darkFontForm;
    padding: 0 15px;
    outline: none;
    justify-content: space-between;
  }

  &__button.active {
    width: 100%;
    margin: 7px 0;
    display: flex;
    align-items: center;
    max-width: 244px;
    min-height: 30px;
    background-color: #161616;
    border: 1px solid #4b4b4b;
    color: $fontColor;
    padding: 0 15px;
    outline: none;
    justify-content: space-between;
    &:hover {
      border: 1px solid #47474754;
      background-color: rgb(36, 35, 35);
    }
    &:active {
      transform: scale(0.98);
    }
  }
  &__button.disabled {
    width: 100%;
    margin: 7px 0;
    display: flex;
    align-items: center;
    max-width: 244px;
    min-height: 30px;
    background-color: #5555552a;
    border: 1px solid #00000059;
    color: rgba(128, 128, 128, 0.472);
    padding: 0 15px;
    outline: none;
    cursor: not-allowed;
    justify-content: space-between;
    &:hover {
      border: 1px solid #00000059;
    }
    &:active {
      transform: scale(1);
    }
  }
}
</style>
