<template>
<!-- 用来做基本框架结构，放置页头页脚 -->
  <div>
      <Navigator></Navigator>
      <Footer></Footer>
  </div>
</template>

<script>
import Navigator from '@/components/Navigator';
import Footer from '@/components/Footer';

export default {
  data() {
    return {
    };
  },
  components: {
    Navigator,
    Footer,
  },

  computed: {},

  mounted: {},

  methods: {},
};

</script>
<style scoped>
</style>
