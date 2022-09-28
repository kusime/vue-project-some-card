<template>
  <div class="inputBox">
    <!--    trim 这个修饰符是打在v-model 上面的，而不是事件对象-->
    <input
      :required="required"
      :type="type"
      :value="modelValue"
      @input="(e) => $emit('update:modelValue', e.target.value)"
    />
    <span class="rainbow-text">{{ promptField }}</span>
  </div>
</template>

<script>
export default {
  name: "InputBoxHover",
  props: {
    promptField: {
      type: String,
      required: true,
      default: "Something",
    },
    modelValue: {
      // 和外部使用的 v-model 配合
      type: String,
      required: true,
      // 一个组件一个输入，所以不用命名v-model ,直接用就好了
    },
    type: {
      type: String,
      default: "text",
    },
    required: {
      type: Boolean,
      default: false,
      description: "the input value is required",
    },
  },
  emits: ["update:modelValue"], // 和外部使用的 v-model 配合
};
</script>

<style scoped>
.inputBox {
  position: relative;
  width: 250px;
}

.inputBox input {
  box-sizing: border-box;
  outline: none;
  color: #fff;
  position: relative;
  background: #27282c;
  text-decoration: none;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  padding: 10px 30px;
  transition: 0.5s;
  border: 3px solid rgb(68, 68, 68);
  font-weight: 600;
  margin: 4px auto;
  width: 320px;
  border-radius: 20px;
  box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  overflow: hidden;
}

.inputBox span {
  position: absolute;
  left: 0;
  padding: 10px;
  pointer-events: none;
  font-size: 1em;
  color: rgba(255, 255, 255, 0.25);
  text-transform: uppercase;
  transition: 0.5s;
}

/*span 元素的点击特效*/
.inputBox input:valid ~ span,
.inputBox input:focus ~ span {
  color: #00dfc4;
  transform: translateX(10px) translateY(-7px);
  font-size: 0.65em;
  padding: 0 10px;
  background: #1d2b3a;
  border-left: 1px solid #00dfc4;
  border-right: 1px solid #00dfc4;
  letter-spacing: 0.2em;
}

/*拓展hover*/
.inputBox input:hover ~ span,
.inputBox input:hover ~ span {
  color: #00dfc4;
  transform: translateX(10px) translateY(-7px);
  font-size: 0.65em;
  padding: 0 10px;
  background: #1d2b3a;
  border-left: 1px solid #00dfc4;
  border-right: 1px solid #00dfc4;
  letter-spacing: 0.2em;
}

/*span 元素的点击特效*/
.inputBox:nth-child(2) input:valid ~ span,
.inputBox:nth-child(2) input:focus ~ span {
  background: #00dfc4;
  color: #1d2b3a;
  border-radius: 2px;
}

/*拓展hover*/
.inputBox:nth-child(2) input:hover ~ span,
.inputBox:nth-child(2) input:hover ~ span {
  background: #00dfc4;
  color: #1d2b3a;
  border-radius: 2px;
}

.inputBox input:valid,
.inputBox input:hover {
  border: 4px solid #00dfc4;
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
