<template>
  <teleport to="body">
    <transition>
      <div v-if="alert.showAlert" id="alert" class="modal">
        <!--  <light-card :class="{hidden:isClicked}" :content="title + content + link + 'Submitted'" title="Submit Success" >-->
        <!--      <light-card-->
        <!--          :content="title + content + link + 'Submitted'"-->
        <!--          title="Submit Success"-->
        <!--      >-->
        <light-card :content="alert.alertContent" :title="alert.alertTitle">
          <template #cardButton>
            <button-light3-d
              button-color="#ffc346"
              button-description="Close"
              @buttonClicked="onClose"
            />
          </template>
        </light-card>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
// define component
import LightCard from "./LightCard.vue";
import ButtonLight3D from "../reactive/ButtonLight3D.vue";
// pull in the pinia of the alert state
import alertState from "../../store/modules/alert/index.js";
const alert = alertState() // introduce the pinia alert state

// self-maintained with pinia
// no needs og the emits
function onClose(){
  alert.cancelAlert()
}
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 27%;
  left: 31%;
  width: 70%;
  margin-left: -150px;
}

/*下面这些是和 transition list 这个内置组件配合的*/
.list-move, /* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
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
