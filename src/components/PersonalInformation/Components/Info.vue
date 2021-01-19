<template>
  <div class="info-container">
    <div class="personal-info-basic">
      <p @click="test">基本信息</p>
      <el-form rel="form" :model="form" label-width="100px">
        <el-form-item label="昵称">
          <el-input class="personal-info-username" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="头像">
          <el-upload class="personal-info-avatar-upload" :on-success="handleAvatarSuccess">
            <img v-if="form.imgSrc" :src="form.imageSrc" class="personal-info-avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <span class="personal-info-avatar-tip">支持jpg、gif或bmp格式的图片、建议文件小于20M</span>
        </el-form-item>
        <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="个人介绍">
            <el-input
            class="personal-info-intro"
            type="textarea"
            placeholder="用一段话介绍你自己，最多输入80字。"
            ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="personal-info-connect">
        <p>联系信息</p>
        <el-form rel="form" :model="form" label-width="100px">
            <el-form-item label="真实姓名">
                <el-input class="personal-info-realname" v-model="form.realName"></el-input>
                <p class="personal-info-tip">用于学生核对，不会以任何形式向第三方透露。</p>
            </el-form-item>
            <el-form-item label="常用邮箱">
                <el-input class="personal-info-email" type="email"></el-input>
                <span class="info-edit-email">修改邮箱</span>
                <p class="personal-info-tip">用于接收来自平台和课程的邮件通知，非常重要。</p>
            </el-form-item>
            <el-form-item label="手机号">
                <el-button type="success">添加</el-button>
                <p class="personal-info-tip">用于优质课程的学习提醒等服务，手机号不会对外公开，请放心。</p>
            </el-form-item>
            <el-form-item label="QQ号码">
                <el-input class="personal-info-QQ"></el-input>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '', // 用户名
        imgSrc: '', // 用户头像
        realName: '', // 真实姓名
      },
      list: [
        '1',
        '2',
        '3',
      ],
    };
  },

  components: {},

  methods: {
  },
};
</script>
<style scoped>
.info-container{
    width:60%;
    margin:30px;
}
.personal-info-username,.personal-info-realname,.personal-info-email,.personal-info-QQ {
  width: 250px;
}
.personal-info-avatar-upload /deep/ .el-upload {
  width: 100px;
  height: 100px;
  border: 1px dashed #d9d9d9;
  border-radius: 20px;
}
.personal-info-avatar {
  width: 100px;
  height: 100px;
  border-radius: 20px;
}
.avatar-uploader-icon {
  text-align: center;
  line-height: 100px;
}
.personal-info-avatar-tip {
  font-size: 12px;
  color: #a9abae;
}
.personal-info-intro{
    width:400px;
}
.personal-info-intro /deep/ .el-input::placeholder{
    font-size:12px;
}
.personal-info-tip{
    font-size:12px;
    color:#A9ABAE;
    margin:1px 0;
}
.info-edit-email{
    font-size: 12px;
    color:#4BAF50;
}
</style>
