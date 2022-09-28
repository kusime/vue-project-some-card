<template>
  <div id="FromGradient">
    <section class="color">
      <div>
        <div class="container">
<!--          <iframe-->
<!--            ref="iframe"-->
<!--            class="background-iframe"-->
<!--            frameborder="0"-->
<!--            loading="lazy"-->
<!--            src="https://cdpn.io/pen/debug/zYXgxQ"-->
<!--          ></iframe>-->
          <div class="form">
            <h2 class="rainbow-text">{{ formTitle }}</h2>
            <!--            这里的 submit.prevent 是防止收到click之后刷新，两个默认行为是不同的-->
            <form @submit.prevent>
              <slot name="InputField"></slot>

              <slot name="ButtonField"></slot>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "FromGradient",
  props: {
    formTitle: {
      type: String,
      description: "The form title",
      required: true,
      default: "Welcome",
    },
  },
};
</script>

<style scoped>
div {
  margin: 10px 10px 10px 10px;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  /*min-height: 100vh;*/
  /*background: linear-gradient(to, bottom, #f1f4f9, #dff1ff);*/
}

section .color {
  position: absolute;
  filter: blur(150px);
}

section .color:nth-child(1) {
  top: -350px;
  width: 600px;
  height: 600px;
  background: #ff359b;
}

section .color:nth-child(2) {
  bottom: -150px;
  left: 100px;
  width: 500px;
  height: 500px;
  background: #fffd87;
}

section .color:nth-child(3) {
  bottom: 50px;
  right: 100px;
  width: 300px;
  height: 300px;
  background: #00d2ff;
}

.form {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px;
  background-color: #1a1a1a;
}

.form h2 {
  margin: auto;
  letter-spacing: 1px;
  text-shadow: 5px 5px 5px #94f1f3;
}

.form .inputBox {
  width: 100%;
  margin-top: 20px;
  box-shadow: 0 5px 10px rgba(203, 145, 145, 0.2);
}

.form input {
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  outline: none;
  padding: 10px 20px;
  border-radius: 35px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 16px;
  letter-spacing: 1px;
  color: #fff;
}

.form .inputBox input::placeholder {
  background: linear-gradient(to right, #d16ba5, #86a8e7, #5ffbf1);
  -webkit-background-clip: text;
  color: transparent;
}

.slot {
  font-weight: 600;
  margin: 45px 0 10px 0;
  width: 320px;
  position: relative;
  padding: 10px 24px;
  box-sizing: border-box;
  border: 1px solid white;
  border-radius: 20px;
  background: transparent;
  color: black;
  box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.12);
  font-size: 18px;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.25s;
}

.form p:nth-of-type(1) {
  margin: 5px 0;
  position: absolute;
  inset: 230px 0 0 290px;
}

.form p:nth-of-type(2) {
  margin: 5px 0;
  position: absolute;
  inset: 355px 0 0 280px;
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

.container {
  position: relative;
  width: 400px;
  min-height: 400px;
  /*定义相对高度和宽度，这个大小是绝对的*/
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
}

.background-iframe {
  position: absolute; /*这里的位置是以container这个规则为基准的*/
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*宽度和高度两个100 就是填充container所定义的容器大小*/
  border-radius: 20px 100px 20px 100px; /*背景卡片的圆弧*/
}
</style>
