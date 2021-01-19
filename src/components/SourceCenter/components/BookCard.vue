<template>
    <el-card class="book-card-container" :body-style="{ padding: '0px' }">
        <img :src="pic" class="book-card-image">
        <div>
            <span>{{bookName}}</span>
            <p>{{intro}}</p>
        </div>
    </el-card>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ['pic', 'bookName', 'intro'],
  components: {},

  methods: {},
};

</script>
<style scoped>
.book-card-container{
    margin: 20px;
}
.book-card-image{
    width:100%
}
</style>
