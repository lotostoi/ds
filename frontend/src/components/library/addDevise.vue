<template>
  <mod-win class="mod-win">
    <div class="cont">
      <transition-group
        tag="div"
        appear-class="enter"
        leave-active-class="leave"
        enter-active-class="enter"
      >
        <div v-if="!error && !succes" class="addcont" key="base">
          <i class="fa fa-times-circle close" aria-hidden="true" @click="off"></i>
          <h3>Adding devices</h3>
          <form id="addDevise" class="add" @submit.prevent="sendDevice($event)">
            <label for="divise">Input name new device:</label>
            <input type="text" name="device" id="device" max="30" v-model="value" />
            <button
              type="submit"
              class="buttons"
              :class="buttonBlock || !valid ? 'block': ''"
              :disabled="buttonBlock || !valid"
            >Add device</button>
          </form>
        </div>
        <div v-if="error" class="error" key="error">
          <i class="fa fa-times-circle close" aria-hidden="true" @click="error = false"></i>
          <p>Error adding device ... Please try again or later</p>
          <div class="contButtons">
            <button class="buttons" @click="error = false">Try again</button>
            <button class="buttons" @click="later">Try later</button>
          </div>
        </div>
        <div v-if="succes" class="succes" key="succes">
          <p>New devise added successfully!</p>
        </div>
      </transition-group>
    </div>
  </mod-win>
</template>

<script>
import modWin from "@/components/modelWindow";
import { mapActions } from "vuex";

import { prefixForProxy } from "@/addtools/globalVar";

const axios = require("axios");

const path = prefixForProxy + "/addDevise";

export default {
  data() {
    return {
      buttonBlock: false,
      value: "",
      error: false,
      succes: false,
    };
  },
  components: {
    modWin,
  },
  methods: {
    ...mapActions({
      on: "modWin/on",
      off: "modWin/off",
    }),

    async sendDevice(e) {
      try {
        this.error = false;
        this.buttonBlock = true;
        await this.$axios.post(path, new FormData(e.target));
        this.value = "";
        this.succes = true;
        setTimeout(() => this.off(), 1000);
        setTimeout(() => {
            this.succes = false
            this.value = ''
        }, 1500);

      } catch (e) {
        this.error = true;
      } finally {
        this.buttonBlock = false;
      }
    },
    later() {
      (this.error = false), (this.value = "");
      this.off();
    },
  },
  computed: {
    valid() {
      return this.value !== "" ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
$timeout: 400ms;

@keyframes leave {
  from {
    opacity: 1;
    transform: scale(1);
  }

  to {
    opacity: 0;
    transform: scale(0);
  }
}

@keyframes enter {
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.enter {
  animation: enter $timeout linear;
}

.leave {
  animation: leave $timeout linear;
}

.cont {
  position: relative;
  width: 300px;
}

.addcont {
  width: 100%;
  background-color: rgb(29, 25, 21);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 10px;
  position: relative;
  border: 1px solid rgb(128, 127, 127);
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 0;
}

.error {
  display: flex;
  flex-direction: column;
  padding: 30px 30px 10px;
  width: 100%;
  background-color: rgb(138, 25, 11);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  position: relative;
  border: 1px solid rgb(128, 127, 127);
  border-radius: 5px;
  color: $fontColor;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
}

.succes {
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
  width: 100%;
  background-color: rgb(31, 121, 206);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  position: relative;
  border: 1px solid rgb(128, 127, 127);
  border-radius: 5px;
  color: $fontColor;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 20px;
  color: $fontColor;

  &:hover {
    color: $textHover;
  }

  &:active {
    transform: scale(0.9);
  }
}

h3 {
  margin: 5px 0;
  text-align: left;
  padding: 0 10px;
  color: $fontColor;
}

.add {
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > label {
    color: $fontColor;
  }

  & > input {
    margin: 10px 0;
    outline: none;
    background-color: gray;
    border-radius: 3px;
    padding: 5px;

    &:hover {
      background-color: rgb(55, 215, 243);
    }

    &:focus {
      background-color: rgb(55, 215, 243);
    }
  }
}

.contButtons {
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: space-around;
}

.buttons {
  border-radius: 3px;
  margin: 10px 0;
  outline: none;
  background-color: $buttonColor;
  color: $buttonTextColor;
  padding: 5px 10px;

  &:hover {
    color: $textHover;
  }

  &:active {
    transform: scale(0.9);
  }
}

.block {
  cursor: not-allowed;
  background-color: $buttonBlock;

  &:hover {
    color: $buttonTextColor;
  }

  &:active {
    transform: scale(1);
  }
}
</style>
