<template>
  <div id="app" style="padding: 50px">
    <Player class="mb_-2" src="https://www.youtube.com/watch?v=9nhg2Y84rmY"/>
    <Player class="mb_-2" src="https://vimeo.com/389509769"/>
    <Player src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>
  </div>
</template>

<script>
import Player from './components/Player';

export default {
  name: 'App',
  components: {
    Player
  }
};
</script>

<style scoped>
.mb_-2 {
  margin-bottom: 20px;
}
</style>