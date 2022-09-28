<template>
  <div>
    <FromGradient form-title="Login">
      <template #InputField>
        <input-box-hover
            v-model.trim="login.username"
            prompt-field="USERNAME"
        ></input-box-hover>
        <input-box-hover
            v-model.trim="login.password"
            prompt-field="PASSWORD"
        ></input-box-hover>
      </template>

      <template #ButtonField>
        <button-light3-d
            button-color="#ff8caa"
            button-description="Login"
            @buttonClicked="login.loginHook"
        ></button-light3-d>
      </template>
      <!--  do not write code like this , because this will treat like default slot-->
      <!--  <modal-card :show-card="alertState.showAlert" :alert-content="alertState.alertContent" :alert-title="alertState.alertTitle" />-->
    </FromGradient>
  </div>
</template>

<script setup>
// import components
import FromGradient from "../components/layout/FromGradient.vue";
import ButtonLight3D from "../components/reactive/ButtonLight3D.vue";
import InputBoxHover from "../components/reactive/InputBoxHover.vue";
import loginState from "../store/modules/login/index.js";
const login = loginState()
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
</style>
