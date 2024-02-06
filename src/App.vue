<template>
  <div id="app">
    <VideoPlayer src="https://vimeo.com/132872813"/>
    <VideoPlayer src="https://www.youtube.com/watch?v=TYO88RXG6Bk"/>
    <VideoPlayer src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"/>
  </div>
</template>

<script>
import VideoPlayer from './components/Player';

export default {
  name: 'App',
  components: {
    VideoPlayer
  }
};
</script>