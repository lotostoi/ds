<template>
  <div class="lib-right">
    <div class="lib-rigth-header">
      <h3>Inspector</h3>
    </div>
    <div v-if="oneImage && oneImage.link" class="lib-right-body">
      <transition
        appear-class="enter"
        leave-active-class="leave"
        enter-active-class="enter"
        mode="out-in"
      >
        <div class="lib-right-cont" :key="oneImage._id">
          <img
            :id="oneImage.link"
            :src="oneImage.link"
            :data-id="oneImage._id"
            class="lib-right-oneImage"
            :style="
              oneImage.width > oneImage.height
                ? 'width: 100%;'
                : 'height: 100%;'
            "
            :alt="oneImage.name"
            :name="oneImage.link"
          />
        </div>
      </transition>
      <div
        class="lib-right-name-cont"
        :style="`width:${width / 1.5}px`"
        v-if="oneImage"
      >
        <div class="fields" v-if="true">
          <span>File:</span>
          <span>{{ oneImage.realName }}</span>
        </div>
        <div class="fields" v-if="false">
          <input
            type="text"
            name="name"
            id="right-name"
            placeholder="Input new name..."
            required
          />
          <button>Save</button>
        </div>
        <div class="fields">
          <span>Titel:</span>
          <span>{{ oneImage.name }}</span>
        </div>
        <div class="fields">
          <span>Id:</span>
          <span>{{ oneImage._id }}</span>
        </div>
        <div class="fields">
          <span>Size:</span>
          <span>{{ oneImage.size }}</span>
        </div>

        <div class="fields">
          <span>Dimensions:</span>
          <span>{{ oneImage.width }} x {{ oneImage.height }}</span>
        </div>
        <div class="fields">
          <span>Date import:</span>
          <span>{{ oneImage.time }}</span>
        </div>
      </div>
    </div>
    <div v-else class="lib-right-message">
      <p>Image isn't selected ...</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      width: 350,
    };
  },
  computed: {
    ...mapGetters({
      pictures: "libPictures/pictures",
      oneImage: "libImageDetails/imageDetails",
    }),
  },
};
</script>

<style lang="scss" scoped>
@keyframes leave {
  from {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 1;
    transform: translateX(20px);
  }
}

@keyframes enter {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.enter {
  animation: enter 0.3s linear;
}

.leave {
  animation: leave 0.3s linear;
}

.lib-right {
  flex-direction: column;
  display: flex;
  width: 25%;
  border-left: 1px solid #000;
}

.lib-rigth-header {
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;

  & > h3 {
    margin: 0;
    padding: 0;
    margin: 0 10px;
    color: $fontColor;
    font-weight: normal;
  }
}

.lib-right-body {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
}

.lib-right-cont {
  background-color: #131313;
  background-image: url("~@/assets/img/loader.svg");
  background-repeat: no-repeat;
  background-position: center;
  outline: 1px solid gray;
  margin: 10px auto;
  height: 150px;
  width: 250px;
}

.lib-right-oneImage[lazy="loaded"] {
  border: 5px solid burlywood;
  width: 100%;
  height: 100%;
}

.lib-right-oneImage {
  margin: auto;
  height: 100%;
}

.lib-right-name-cont {
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  padding: 0 5px;

  & > .fields {
    margin: 10px 0;
    display: flex;
    justify-content: flex-start;

    & > span:first-of-type {
      color: rgb(226, 223, 223);
      font-weight: 600;
      display: block;
    }

    & > span:last-of-type {
      margin-left: 10px;
      color: $fontColor;
      font-weight: 400;
      display: block;
    }
  }
}

.lib-right-message {
  width: 100%;
  display: flex;
  padding: 40px 10px;
  align-items: center;
  justify-content: center;

  & > p {
    color: $fontColor;
  }
}
</style>
