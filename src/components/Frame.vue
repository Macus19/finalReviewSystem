<template>
<!-- 用来做基本框架结构，放置页头页脚 -->
<div class="frame">
    <Navigator></Navigator>
    <main class="main">
      <router-view></router-view>
    </main>
    <Footer class="footer"></Footer>
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
.frame{
  min-height:100%;
  position:relative;
}
.main{
  height: 200px;
}
.footer{
  width:100%;
  position:absolute;
  bottom: 0
}
</style>
