<template>
  <div class="source-center-container">
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import BookContent from '../SourceCenter/components/BookContent';
import VideoContent from '../SourceCenter/components/VideoContent';

export default {
  data() {
    return {
      currentContent: 'BookContent',
    };
  },

  components: {
    BookContent,
    VideoContent,
  },

  // computed: {},

  // mounted: {},

  methods: {
  },
};
</script>
<style scoped>
.source-center-container, .view{
  min-height:80vh
}

</style>
