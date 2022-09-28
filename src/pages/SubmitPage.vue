<template>
  <!--    这样子写结构会出问题的，因为上级display下穿过来的时候是由多个子节点，更关键的是，第一个节点
      还是自定义的节点，直接在自定义节点上，display 这些会报错的，所有还是最好包起来一下,同时为了方便区分
      最好还是给一个组件打上id
      <div>-->
  <div id="assigmentInputPage">
    <FromGradient form-title="SubmitCard">
      <template #InputField>
        <InputBoxHover
          v-model.trim="submit.title"
          prompt-field="title"
          type="text"
        />
        <InputBoxHover
          v-model="submit.content"
          prompt-field="description"
          type="text"
        />
        <InputBoxHover
          v-model.trim="submit.link"
          prompt-field="link"
          type="text"
        />
      </template>

      <template #ButtonField>
        <ButtonLight3D
          button-color="#8af5ff"
          button-description="Submit"
          @buttonClicked="submit.submitHook"
        />
      </template>
    </FromGradient>
  </div>
</template>

<script setup>
import FromGradient from "../components/layout/FromGradient.vue";
import InputBoxHover from "../components/reactive/InputBoxHover.vue";
import ButtonLight3D from "../components/reactive/ButtonLight3D.vue";
import submitState from "../store/modules/submit/index.js";
const submit = submitState()



</script>
