<template>
  <light-navigator/>

  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <modal-card/>
</template>

<script setup>
import APIs from "./config/APIs.js";
import LightNavigator from "./components/reactive/LightNavigator.vue";
//manage the navigator of the Application with pinia
import ModalCard from "./components/layout/modalCard.vue";
import mainStore from "./store/index.js";
import loginState from "./store/modules/login/index.js";
import {watch,toRaw} from "vue";
import {storeToRefs} from "pinia";
const main = mainStore()
const login = loginState()

const {dataList} = storeToRefs(main);

watch(dataList ,async function (dataList) {
      console.log("Main State updated ->>", login.username,login.password,dataList);
      await APIs.updateDataList(
          login.username,
          login.password,
          dataList
      );
    }
,{ deep: true })
</script>

<style scoped>

</style>
  // fires on nested property mutations
  // Note: `newValue` will be equal to `oldValue` here
  // because they both point to the same object!!
  // console.log("update Trigger >>",toRaw(newValue), toRaw(oldValue));
  // if(newValue===oldValue){
  //   console.log("Same !!")
  // }
