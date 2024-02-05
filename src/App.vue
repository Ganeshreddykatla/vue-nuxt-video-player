<template>
  <div id="app">
    <Player src="https://vimeo.com/132872813"/>
    <Player src="https://www.youtube.com/watch?v=TYO88RXG6Bk"/>
    <Player src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"/>
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