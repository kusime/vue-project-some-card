<template>
  <div>
    <FromGradient form-title="Register">
      <template #InputField>
        <input-box-hover
          v-model.trim="register.username"
          prompt-field="UserName"
        ></input-box-hover>
      </template>

      <template #ButtonField>
        <button-light3-d
          button-color="#ff8caa"
          button-description="Register"
          @buttonClicked="register.userRegisterHook"
        ></button-light3-d>
      </template>
    </FromGradient>
  </div>
</template>

<script setup>
import FromGradient from "../components/layout/FromGradient.vue";
import ButtonLight3D from "../components/reactive/ButtonLight3D.vue";
import InputBoxHover from "../components/reactive/InputBoxHover.vue";
import registerState from "../store/modules/register/index.js";
const register = registerState()
console.log(register.username)
</script>
