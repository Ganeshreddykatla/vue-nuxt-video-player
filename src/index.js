import { createApp } from 'vue';
import VideoPlayer from './components/Player';

const app = createApp();

app.component('VideoPlayer', VideoPlayer);

export default app;