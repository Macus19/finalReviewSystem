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

  methods: {},
};

</script>
<style scoped>
.frame{
  min-height:100%;
  position:relative;
}
.main{
  width:75%;
  margin:0 auto;
  height:auto;
  overflow: hidden;
  padding-bottom: 210px;
}
.footer{
  width:100%;
  position:absolute;
  bottom: 0
}
</style>
