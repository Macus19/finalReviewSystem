<template>
  <el-row type="flex" class="book-content-container">
    <!-- 左侧菜单栏 -->
    <el-col :span="4" class="book-content-left">
      <el-menu
        default-active="1-1"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>电子书资源</span>
        </template>
        <el-submenu index="1">
          <template slot="title">课内电子书</template>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">英文原版书籍</template>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">英语阅读学习材料</template>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">BBC阅读材料</template>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">外刊杂志</template>
        </el-submenu>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <el-row class="book-content-right-header">
        <el-col :span="12">
          <p>选择你感兴趣的类型，针对性推荐书籍！</p>
        </el-col>
        <el-col :span="12">
          <div>1</div>
        </el-col>
      </el-row>
      <el-row class="book-content-right-main">
        <el-col :span="6" v-for="(item, index) in bookList" :key="index">
          <book-card
            :pic="item.photo"
            :bookName="item.title"
            :intro="item.description"
            :link="item.link"
          ></book-card>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import BookCard from './BookCard';

export default {
  data() {
    return {
      currentPage: 1,
      bookList: [
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          bookName: '书本名称',
          intro: '介绍',
        },
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          bookName: '书本名称',
          intro: '介绍',
        },
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          bookName: '书本名称',
          intro: '介绍',
        },
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          bookName: '书本名称',
          intro: '介绍',
        },
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          bookName: '书本名称',
          intro: '介绍',
        },
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          bookName: '书本名称',
          intro: '介绍',
        },
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          bookName: '书本名称',
          intro: '介绍',
        },
        {
          pic: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          bookName: '书本名称',
          intro: '介绍',
        },
      ],
    };
  },

  components: {
    BookCard,
  },

  created() {
    this.getBookList();
  },
  methods: {
    getBookList() {
      this.axios({
        url: `${process.env.API_HOST}/resource/getEbookList`,
        method: 'POST',
        data: {
          token: sessionStorage.getItem('token'),
          data: {
            per_page: 10,
            page: 1,
          },
        },
      }).then((res) => {
        this.bookList = res.data.data.data;
      });
    },
  },
};
</script>
<style scoped>
.book-content-container{
  height: 100%;
}
.book-content-container /deep/ .el-menu{
  height: 100%;
}
</style>
