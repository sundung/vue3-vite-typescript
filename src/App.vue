<template>
  <div>
    <el-button type="primary">主要按钮qq</el-button>
    <testAxios></testAxios>
    <div class="test">测试stylus</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import testAxios from './components/testAxios.vue'
export default defineComponent({
  name: 'App',
  components: {
    testAxios
  }
})
</script>

<style lang="stylus" scoped>
.test {
  color: red;
  background-color: pink;
  width: 110px;
  height: 40px;
}
</style>
