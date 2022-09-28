<template>
  <div class="assigmentShowCard">
    <!--  <div>-->
    <transition>
      <div v-if="!login.isLogin">
        <light-card content="Not Login .." title="Please Login First .." />
      </div>
      <div v-else-if="login.isLogin && main.dataList.length === 0">
        <light-card content="Nothing here ..." title="Ops.. no data yet !" />
      </div>
      <transition-group v-else name="list" tag="ul">
        <li v-for="(data, dataIndex) in main.dataList" :key="data">
          <light-card :content="data.content" :title="data.title">
            <template #cardButton>
              <button-light3-d
                button-color="#ffc346"
                button-description="Open Link"
                @buttonClicked="linkHook(data.link)"
              />
              <button-light3-d
                button-color="#ffc346"
                button-description="Delete"
                @buttonClicked="deleteHook(dataIndex)"
              />
            </template>
          </light-card>
        </li>
      </transition-group>
    </transition>
  </div>
</template>

<script setup>
import LightCard from "../components/layout/LightCard.vue";
import ButtonLight3D from "../components/reactive/ButtonLight3D.vue";
import mainStore from "../store/index.js";
import loginState from "../store/modules/login/index.js";

const login = loginState();
const main = mainStore();

function linkHook(link) {
  window.open(link);
}

function deleteHook(dataIndex) {
  main.deleteHook(dataIndex);
}
</script>

<style scoped>
/*下面这些是和 transition 这个内置组件配合的*/
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  height: 0;
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
</style>
