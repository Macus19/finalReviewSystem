<template>
    <el-card @click.native="jumpLink" class="book-card-container" :body-style="{ padding: '0px' }">
        <img :src="`http://test.ameow.xyz/en/public/${pic}`" class="book-card-image">
        <div>
            <span class="title">{{bookName}}</span>
            <p class="intro">{{intro}}</p>
        </div>
    </el-card>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ['pic', 'bookName', 'intro', 'link'],
  components: {},

  methods: {
    jumpLink() {
      window.open(this.link);
    },
  },
};

</script>
<style scoped>
.book-card-container{
    height: 300px;
    margin: 20px;
    cursor: pointer;
}
.book-card-image{
    width:100%;
    height: 180px;
}
.title{
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.intro{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
