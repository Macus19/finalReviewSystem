<template>
  <div class="group-container">
    <div class="choose-bar">
      <div class="choose-bar-container">
        <div class="choose-bar-item">
          <i class="el-icon-picture-outline"></i>
          <p class="choose-bar-text">查看小组</p>
        </div>
        <div class="choose-bar-item">
          <i class="el-icon-edit-outline"></i>
          <p class="choose-bar-text">发帖子</p>
        </div>
        <div class="choose-bar-item">
          <i class="el-icon-video-camera-solid"></i>
          <p class="choose-bar-text">小视频</p>
        </div>
      </div>
    </div>
    <el-row class="group-container-main">
        <el-col :span="8" class="group-member">
            <p class="group-main-title">成员信息</p>
            <div class="group-member-card" v-for="(item) in memberList" :key="item.memberId">
                <el-row type="flex" class="group-member-intro" align="middle">
                    <el-col :span="6">
                        <img :src="item.avatar" class="group-member-avatar">
                    </el-col>
                    <el-col :span="18">
                        <span>{{item.memberName}}</span>
                    </el-col>
                </el-row>
                <p>学习计划：{{item.learningPlan}}</p>
                <hr>
            </div>
        </el-col>
        <el-col :span="8" class="group-plan">
            <p class="group-main-title">成员学习任务</p>
            <div>
                <div class="plan-card">
                    <p>
                        <el-checkbox></el-checkbox>
                    </p>
                    <p>
                        <el-checkbox></el-checkbox>
                    </p>
                    <p>
                        <el-checkbox></el-checkbox>
                    </p>
                </div>
            </div>
        </el-col>
        <el-col :span="8" class="group-plan">
          <div class="pk-container">
            <p class="group-main-title">PK邀请</p>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <div class="btn-container">
              <el-button>确认</el-button>
            </div>
          </div>
          <div class="pk-container">
            <p class="group-main-title">领取任务奖励</p>
            <div>
                <div class="plan-card">
                    <p>
                        <el-checkbox></el-checkbox>
                    </p>
                    <p>
                        <el-checkbox></el-checkbox>
                    </p>
                    <p>
                        <el-checkbox></el-checkbox>
                    </p>
                </div>
            </div>
            <div class="btn-container">
              <el-button>确认</el-button>
            </div>
          </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memberList: [
        {
          memberId: '123',
          memberName: '三木',
          avatar: require('../../assets/avatar.jpg'),
          learningPlan: '暂无',
        },
        {
          memberId: '123',
          memberName: '三木',
          avatar: require('../../assets/avatar.jpg'),
          learningPlan: '暂无',
        },
        {
          memberId: '123',
          memberName: '三木',
          avatar: require('../../assets/avatar.jpg'),
          learningPlan: '暂无',
        },
        {
          memberId: '123',
          memberName: '三木',
          avatar: require('../../assets/avatar.jpg'),
          learningPlan: '暂无',
        },
      ],
    };
  },

  components: {},

  methods: {},
};
</script>
<style scoped>
.group-container-main{
    margin: 20px;
}
.group-main-title{
    font-size: 20px;
    font-weight: bold;
    text-align: center;
}
.choose-bar{
  margin: 10px auto;
}
.choose-bar-container{
  display: flex;
  justify-content: space-around;
  width:200px;
  left: 1128px;
  box-shadow: 0px 0px 12px 0px rgba(170, 170, 170, 0.5);
  border-radius:28px;
  margin: 0 auto;
}
.choose-bar-item{
  text-align: center;
  vertical-align: middle;
  line-height: 20px;
  padding: 10px 5px;
  font-size: 13px;
  color:#528FFF;
}
.choose-bar-text{
  margin:5px 0 0 0;
  color:#000;
}
.group-member-intro{
    font-weight: bold;
}
.group-member-avatar{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.group-member, .group-plan{
    padding: 10px 50px;
    border: 1px solid #eee;
    border-radius: 20px;
}
.el-select{
  width:100%
}
.btn-container{
  text-align: center;
}
</style>
