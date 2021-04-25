<template>
  <div class="note-item-container">
      <p class="title">{{title}}</p>
      <p class="time">{{time}}</p>
      <p class="detail" @click="turnToNoteDetail">点击查看详情</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ['id', 'title', 'time'],

  components: {},

  methods: {
    turnToNoteDetail() {
      this.$router.push({
        path: `/NoteDetail/${this.id}`,
      });
    },
  },
};

</script>
<style scoped>
.note-item-container{
    position: relative;
    width: 180px;
    height: 150px;
    padding: 20px;
    border: 1px solid #808080;
    border-radius: 10px;
}
.time{
    text-align: right;
    font-size: 12px;
    color: #808080;
    margin-top: 80px;
    margin-right: -10px;
}
.title{
    font-size:20px;
    font-weight: bold;
    margin: 10px 0;
}
.detail{
    position: absolute;
    font-size: 12px;
    color: #808080;
    bottom: 0px;
    right: 10px;
    cursor: pointer;
}
</style>
