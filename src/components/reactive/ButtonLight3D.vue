<template>
  <!--  click.prevent 是方式click 事件上摆到 submit-->
  <!--  但是防止上摆之后就会让表单检查不生效。。。-->
  <button :style="{ '--clr': buttonColor }" @click.prevent="clickHooks">
    <i></i>
    <span class="rainbow-text">
      {{ buttonDescription }}
    </span>
  </button>
</template>

<script>
export default {
  name: "ButtonLight3D",
  emits: ["buttonClicked"],
  methods: {
    clickHooks() {
      this.$emit("buttonClicked", this.buttonDescription);
    },
  },
  props: {
    buttonDescription: {
      type: String,
      // required: true,
      description: "这个按钮的描述",
      default: "Button",
    },
    buttonColor: {
      type: String,
      required: true,
      default: "#80fff2",
      description: "这个按钮的颜色",
    },

    // 不要这样子写组件通讯，所有的子组件通过事件上传的方式进行通讯
    // functionCallBack:{
    //   type: Function,
    //   required: true,
    //   default(){
    //     console.error("this button Need A callBack Function")
    //     return 1;
    //   },
    //   content:"这个按钮点击之后要触发的函数"
    // }
  },
};
</script>

<style scoped>
button {
  /*alignment: center;*/
  position: relative;
  background: #27282c;
  color: #fff;
  text-decoration: none;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  padding: 10px 30px;
  transition: 0.5s;
  border: 3px solid rgb(68, 68, 68);
  font-weight: 600;
  margin: 4px auto;
  width: 320px;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  overflow: hidden;
}

button:hover {
  letter-spacing: 0.25em;
  border-color: var(--clr);
  color: var(--clr);
  box-shadow: 0 0 35px var(--clr);
}

button::before {
  content: "";
  position: absolute;
  inset: 2px;
}

s span {
  position: relative;
  z-index: 2;
  color: white;
}

button i {
  position: absolute;
  inset: 0;
  display: block;
}

button i::before {
  content: "";
  position: absolute;
  top: -6px;
  left: 80%;
  width: 10px;
  height: 5px;
  border: 2px solid var(--clr);
  background: #27282c;
  transform: translateX(-50%);
  transition: 0.5s;
}

button:hover i::before {
  width: 20px;
  left: 20%;
}

button i::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 20%;
  width: 10px;
  height: 5px;
  border: 2px solid var(--clr);
  background: #27282c;
  transform: translateX(-50%);
  transition: 0.5s;
}

button:hover i::after {
  width: 20px;
  left: 80%;
}

@keyframes hue {
  from {
    filter: hue-rotate(0);
  }

  to {
    filter: hue-rotate(-360deg);
  }
}

.rainbow-text {
  display: inline-block;
  position: relative;
  color: transparent;
  animation: hue 1.5s linear infinite;
  background-image: linear-gradient(
    to right bottom,
    rgb(255, 0, 0),
    rgb(255, 128, 0),
    rgb(255, 255, 0),
    rgb(0, 255, 0),
    rgb(0, 255, 128),
    rgb(0, 255, 255),
    rgb(0, 128, 255),
    rgb(0, 0, 255),
    rgb(128, 0, 255),
    rgb(255, 0, 255),
    rgb(255, 0, 128)
  );
  -webkit-background-clip: text;
}
</style>
