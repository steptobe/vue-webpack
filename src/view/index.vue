<!-- 哈哈哈 -->
<template>
    <div class="index"></div>
</template>
<script>
import {
  computed,
  watch,
  reactive,
  toRefs,
  defineComponent
} from '@vue/composition-api'
export default defineComponent({
  name: 'index',

  props: {},

  components: {},

  setup(props, ctx) {
    const params = reactive({})
    return { ...toRefs(state) }
  }
})
</script>

<style lang="scss" scoped>
.index  {
}
</style>