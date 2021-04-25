<template>
  <div class="like-container" @click="changeLikeStatus()">
    <svg version="1.1" :class="isActive ? 'animates-stroke':''" x="0px" y="0px" viewBox="0 0 100 100">
        <g transform="translate(0,-952.36218)">
            <path style="color:#000000;enable-background:accumulate;" d="m 34.166665,972.36218 c -11.41955,0 -19.16666,8.91891 -19.16666,20.27029 0,19.45943 15,27.56753 35,39.72973 20.00001,-12.1622 34.99999,-20.2703 34.99999,-39.72973 0,-11.35137 -7.7471,-20.27029 -19.16665,-20.27029 -7.35014,0 -13.39148,4.05405 -15.83334,6.48647 -2.44185,-2.43241 -8.48319,-6.48647 -15.83334,-6.48647 z"
            fill="transparent" :class="isActive ? 'animates-fill':'' " id="heart-path" stroke="#F8332A" stroke-width="5" marker="none" visibility="visible" display="inline" overflow="visible" />
        </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: ['postid'],
  data() {
    return {
      initPostId: this.postid,
      isActive: false,
    };
  },

  components: {},

  created() {
    console.log(this.props);
    this.getLikeStatus();
  },
  methods: {
    /**
     * 获取点赞状态
     */
    getLikeStatus() {
      this.axios({
        url: '/api/post/getLikeStatus',
        method: 'POST',
        data: {
          token: sessionStorage.getItem('token'),
          data: {
            post: this.initPostId,
          },
        },
      }).then((res) => {
        this.isActive = parseInt(res.data.msg, 0) === 1;
      });
    },
    /**
      * 点赞状态接口封装
     */
    likeStatus(path, infoMessage) {
      this.isActive = !this.isActive;
      if (this.isActive) {
        this.axios({
          url: `/api/post/${path}`,
          method: 'POST',
          data: {
            token: sessionStorage.getItem('token'),
            data: {
              post: this.initPostId,
            },
          },
        }).then((res) => {
          if (res.data.data.code === 0) {
            this.$message({
              message: infoMessage,
              type: 'success',
            });
            this.$emit('post', true);
          }
        });
      }
    },

    /**
     * 改变点赞状态
     */
    changeLikeStatus() {
      if (this.isActive) {
        this.likeStatus('dislikePost', '取消点赞成功！');
      } else {
        this.likeStatus('likePost', '点赞成功！');
      }
    },
  },
};

</script>
<style scoped>
.wishlist-heart-group {
    display: inline-block;
    width: 40px;
    height: 40px;
    position: relative;
}
.animates-stroke{
    animation: wishlist-heart-wiggle 400ms 50ms forwards ease-in-out;
}
.animates-fill{
    animation: wishlist-heart-add 400ms forwards;
    transition: fill 200ms;
}
@-webkit-keyframes wishlist-heart-wiggle {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    25% {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg);
    }
    75% {
        -webkit-transform: rotate(8deg);
        transform: rotate(8deg);
    }
    100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
}
@keyframes wishlist-heart-wiggle {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    25% {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg);
    }
    75% {
        -webkit-transform: rotate(8deg);
        transform: rotate(8deg);
    }
    100% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
}
@-webkit-keyframes wishlist-heart-add {
    0% {
        stroke-width: 5;
    }
    50% {
        stroke-width: 20;
    }
    100% {
        stroke-width: 5;
        fill: #f8332a;
    }
}
@keyframes wishlist-heart-add {
    0% {
        stroke-width: 5;
    }
    50% {
        stroke-width: 20;
    }
    100% {
        stroke-width: 5;
        fill: #f8332a;
    }
}
</style>
