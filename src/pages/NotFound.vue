<template>
  <light-card
    :content="'id = ' + id + ' query : ' + $route.query.test"
    :title="`Sorry ${$route.params['NotFound']} NotFound`"
  >
    <template #cardButton>
      <button-light3-d
        button-color="e59951"
        @buttonClicked="
          $router.push({
            path: '/',
            query: {
              goBack: 'fine',
            },
          })
        "
      ></button-light3-d>
    </template>
  </light-card>
</template>

<script>
import LightCard from "../components/layout/LightCard.vue";
import ButtonLight3D from "../components/reactive/ButtonLight3D.vue";
export default {
  name: "NotFound",
  components: { ButtonLight3D, LightCard },
  props: ["NotFound", "id"],
};
</script>
<style></style>
