<!--  -->
<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <input
      type="text"
      v-model="msg"
    >
  </div>
</template>
<script>
import {
  computed,
  watch,
  reactive,
  toRefs,
  defineComponent,
} from "@vue/composition-api"
export default defineComponent({
  name: "app",

  props: {},

  components: {},

  setup(props, ctx) {
    const state = reactive({
      msg: "welcome to your vue.js",
    });
    // getMsg();
    const getMsg = () => {
      state.msg = "lyl";
    };
    return { ...toRefs(state) };
  },
});
</script>

<style lang="scss" scoped>

</style>