<template>
  <!--  但是注意一下，有些可能要loop的,就是要重用的那种，直接一个random-->
  <div :id="Math.random()" class="container">
    <div
      :style="{ '--clr-1': randomColor(), '--clr-2': randomColor() }"
      class="box"
    >
      <span></span>
      <div class="content">
        <!--        check empty-->
        <h2 v-if="title !== ''">{{ title }}</h2>
        <p v-if="title !== ''">{{ content }}</p>
        <slot name="cardButton" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LightCard",
  props: {
    title: {
      type: String,
      // required: true,
      default: "",
    },
    content: {
      type: String,
      // required: true,
      default: "",
    },
  },
  methods: {
    randomColor() {
      return `#${(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)}`;
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  flex-wrap: wrap;
}

.container .box {
  position: relative;
  color: #fff;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 30px;
  transition: 0.5s;
  width: 100%;
}

.container .box:hover {
  transform: translateY(-20px);
}

.container .box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, var(--clr-1), var(--clr-2));
}

.container .box::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, var(--clr-1), var(--clr-2));
  filter: blur(30px);
}

.container .box span {
  position: absolute;
  inset: 6px;
  background: rgb(0, 0, 0, 0.6);
  z-index: 2;
}

.container .box span::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

.container .box .content {
  position: relative;
  z-index: 10;
  padding: 20px 40px;
}

.container .box .content h2 {
  font: 2em "";
  text-align: center;
  margin-bottom: 10px;
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

.container .box .content p {
  font: 1.1em/1.4em "";
  margin-bottom: 10px;
  text-align: center;
}

@keyframes hue {
  from {
    filter: hue-rotate(0);
  }

  to {
    filter: hue-rotate(-360deg);
  }
}
</style>
