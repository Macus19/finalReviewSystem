<template>
  <div class="note-detail-container">
    <p class="title">{{note.title}}</p>
    <p class="time">发布时间：{{note.time}}</p>
    <div v-html="note.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      note: {},
    };
  },

  created() {
    this.getNoteDetail();
  },

  components: {},

  methods: {
    getNoteDetail() {
      this.axios({
        url: `${process.env.API_HOST}/note/getNote`,
        method: 'POST',
        data: {
          token: sessionStorage.getItem('token'),
          data: {
            note: this.id,
          },
        },
      }).then((res) => {
        console.log(res.data.data);
        if (res.data.code === 0) {
          this.note = res.data.data;
        }
      });
    },
  },
};

</script>
<style scoped>
.note-detail-container{
  width: 75%;
  margin: 20px auto;
  border:1px solid #808080;
  min-height: 600px;
  border-radius: 10px;
  padding: 10px 50px;
}
.title{
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}
.time{
  color: #808080;
  text-align: center;
}
</style>
