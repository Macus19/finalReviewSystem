<template>
  <el-row class="footer" type="flex" justify="space-around">
    <!-- 左边介绍部分 -->
      <el-col :span="15" class="footer-left-introduction">
          <p>我们是 专注于 广外人 的英文阅读课程期末复习的在线平台。</p>
          <el-row class="footer-introduction-help">
              <el-col :span="2">关注我们</el-col>
              <el-col :span="2">联系我们</el-col>
              <el-col :span="2">帮助中心</el-col>
              <el-col :span="4">@广东外语外贸大学</el-col>
              <el-col :span="5">英文学院 & 信息学院</el-col>
          </el-row>
          <p class="footer-introduction-copyright">©2020  分析性阅读课程期末复习系统</p>
      </el-col>
      <!-- 右边下载介绍部分 -->
      <el-col :span="6" class="footer-right-subscribe">
        <!-- 苹果下载 -->
        <el-col :span="12" class="footer-subscribe-download">
          <el-row type="flex" align="middle" class="appstore-donwload">
            <el-col :span="10" class="footer-download-icon">
              <!-- icon -->
              <i class="el-icon-star-off"></i>
            </el-col>
            <!-- 文字介绍 -->
            <el-col :span="14">
              <p class="footer-download-text">App Store</p>
              <p class="footer-download-text">下载</p>
            </el-col>
          </el-row>
        </el-col>
        <!-- 安卓下载 -->
        <el-col :span="12" class="footer-subscribe-download">
          <el-row type="flex" align="middle" class="android-donwload">
            <el-col :span="10" class="footer-download-icon">
              <!-- icon -->
              <i class="el-icon-star-off"></i>
            </el-col>
            <el-col :span="14">
              <!-- 文字介绍 -->
              <p class="footer-download-text">Android</p>
              <p class="footer-download-text">下载</p>
            </el-col>
          </el-row>
        </el-col>
        <!-- 下面的关注我们 -->
        <p class="footer-subscribe-us">关注我们：</p>
      </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  components: {},

  methods: {},
};

</script>
<style scoped>
.footer{
  box-sizing: border-box;
  padding: 30px 0;
  height:210px;
}
.el-row{
 background-color: #474443;
 color:#fff;
 font-weight: bold;
}
.footer-introduction-copyright{
  color:#808080
}

.el-icon-star-off{
  font-size: 30px;
}
.appstore-donwload,.android-donwload{
  display: flex;
  border:1px solid #fff;
  background-color: #000;
  border-radius: 10px;
  padding:10px;
  font-size:14px;
  margin-bottom: 20px;
}
.footer-download-icon{
  text-align: center;
}
.footer-download-text{
  margin: 0
}
.footer-subscribe-us{
  margin:20px;
}
</style>
