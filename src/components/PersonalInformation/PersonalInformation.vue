<template>
  <div class="personal-info-container">
      <div class="personal-info-tabbar">
          <el-tabs type="card">
              <el-tab-pane label="资料设置" name="info">
                  <Info class="personal-info-tab-item"></Info>
              </el-tab-pane>
              <el-tab-pane label="账号设置" name="account">
                  <Account></Account>
              </el-tab-pane>
              <el-tab-pane label="邮件设置" name="email">
                  <Email></Email>
              </el-tab-pane>
          </el-tabs>
      </div>
  </div>
</template>

<script>
import Info from './Components/Info';
import Account from './Components/Account';
import Email from './Components/Email';

export default {
  data() {
    return {
    };
  },

  components: {
    Info,
    Account,
    Email,
  },

  methods: {
    handleAvatarSuccess(res, file) {
      this.form.imgSrc = URL.createObjectURL(file.raw);
      // eslint-disable-next-line no-console
      console.log(this.form.imgSrc);
    },
    changeContent(tab, event) {
      // eslint-disable-next-line no-console
      console.log(tab, event);
    },
  },
};

</script>
<style scoped>
.personal-info-conntainer{
    background-color: #FAFAFA;
}
.personal-info-tabbar /deep/ .el-tabs{
    width:100%;
}
.personal-info-tabbar{
    background-color: #ffffff;
}
</style>
