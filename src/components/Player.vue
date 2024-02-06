<!-- eslint-disable vue/multi-word-component-names -->
/* eslint-disable */
<template>
    <div :id="id" class="v-player" :class="containerStyles">
        <iframe v-if="isValidUrl && urlType == 'iframe'" :src="getVideoUrl(src)" :allow="allow"
            :allowfullscreen="allowFullscreen" :id="id + '-iframe'" class="v-player__iframe" :class="playerStyles">
        </iframe>
        <video v-if="isValidUrl && urlType == 'video'" class="v-player__video" controls :autoplay="autoplay" :loop="loop"
            :muted="muted" :poster="poster" :preload="preload" name="media">
            <source :src="getVideoUrl(src)">
        </video>

        <div v-if="!isValidUrl" class="v-player__content">
            <!--            <h1 class="v-player__content-icon">&#9888;</h1>-->
            <strong class="v-player__content-strong">Sorry,</strong>
            <p class="v-player__content-text">The given video URL is not valid or unsupported.</p>
            <p class="v-player__content-link">({{ getVideoUrl(src) }})</p>
        </div>
    </div>
</template>

<script>
import {ref, defineProps, defineComponent} from 'vue'
export default defineComponent({
    name:'VideoPlayer'
})
const isValidUrl = ref(true)
// eslint-disable-next-line no-unused-vars
let urlType = 'iframe'
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    id: {
            type: String,
            required: false,
            default: 'v-player'
        },
        src: {
            required: true
        },
        allow: {
            required: false,
            type: String,
            default: 'clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        },
        allowFullscreen: {
            required: false,
            type: Boolean,
            default: true
        },
        containerStyles: {
            required: false,
            type: String
        },
        playerStyles: {
            required: false,
            type: String
        },
        autoplay: {
            required: false,
            type: Boolean,
            default: false
        },
        loop: {
            required: false,
            type: Boolean,
            default: false
        },
        muted: {
            required: false,
            type: Boolean,
            default: false
        },
        poster: {
            required: false,
            type: String,
            default: null
        },
        preload: {
            required: false,
            type: String,
            default: 'auto'
        },
});
const isValidVideoUrl = (url) => {
    // let videoTypes = ['.mp4', '.avi', '.mov', 'mpg', '.wmv', '.flv', '.webm', '.mkv', '.ogv', '.3gp', '.3g2']
    let videoTypes = ['.mp4', '.ogg', '.webm']

    for (let i in videoTypes) {
        if (url.includes(videoTypes[i])) {
            urlType = 'video'
            return url
        }
    }
    isValidUrl.value = false
    return url
}

const getVideoUrl = (url) => {
    if (!url) return null

    let vimeo = /(?:https?:\/\/(?:www\.)?)?vimeo.com\/(?:channels\/|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/;
    let youtube = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    let isValidYoutubeUrl = url.match(youtube);

    if (isValidYoutubeUrl) {
        urlType = 'iframe'
        return 'https://www.youtube.com/embed/' + isValidYoutubeUrl[1];
    }

    let isValidVimeoUrl = url.match(vimeo);
    if (isValidVimeoUrl) {
        urlType = 'iframe'
        return 'https://player.vimeo.com/video/' + isValidVimeoUrl[3]
    }

    return isValidVideoUrl(url);
}
</script>
<style>
.v-player {
    width: 100%;
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
    background-color: transparent;
    border-radius: 5px;
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 15%);
}

.v-player__iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: transparent;
    border-radius: 5px;
    background-color: #000;
}

.v-player__iframe video {
    width: 100%;
    height: 100%;
}

.v-player__video {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: transparent;
    border-radius: 5px;
    background-color: #000;
}

.v-player__content{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: rgba(0,0,0,1);
}
.v-player__content-icon{
    margin-bottom: 0;
    color: #afafaf;
    font-size: 2rem;
}
.v-player__content-strong{
    font-size: 1.2rem;
    color: #fff;
}
.v-player__content-text{
    color: #fff;
    font-size: .9rem;
    margin-bottom: 0;
}

.v-player__content-link{
    font-size: .8rem;
    color: #fff;
}

@media screen and (max-width: 1200px) {
    .v-player__content-strong{
        font-size: 1.15rem;
    }
    .v-player__content-text{
        font-size: .88rem;
    }
    .v-player__content-link{
        font-size: .78rem;
    }
}

@media screen and (max-width: 992px) {
    .v-player__content-strong{
        font-size: 1.1rem;
    }
    .v-player__content-text{
        font-size: .86rem;
    }
    .v-player__content-link{
        font-size: .76rem;
    }
}

@media screen and (max-width: 768px) {
    .v-player__content-strong{
        font-size: 1.05rem;
    }
    .v-player__content-text{
        font-size: .84rem;
    }
    .v-player__content-link{
        font-size: .74rem;
    }
}

@media screen and (max-width: 576px) {
    .v-player__content-strong{
        font-size: 1rem;
    }
    .v-player__content-text{
        font-size: .82rem;
    }
    .v-player__content-link{
        font-size: .72rem;
    }
}

@media screen and (max-width: 320px) {
    .v-player__content-strong{
        font-size: .95rem;
    }
    .v-player__content-text{
        font-size: .80rem;
    }
    .v-player__content-link{
        font-size: .7rem;
    }
}

@media screen and (max-width: 280px) {
    .v-player__content-strong{
        font-size: .9rem;
    }
    .v-player__content-text{
        font-size: .78rem;
    }
    .v-player__content-link{
        font-size: .68rem;
    }
}
</style>
