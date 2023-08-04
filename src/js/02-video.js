import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframePlayer = new Player('vimeo-player');

iframePlayer.on("timeupdate", throttle(function(data){
    localStorage.setItem("videoplayer-current-time", data.seconds) 
    
        console.log(localStorage.getItem("videoplayer-current-time"));
    }, 1000))

if (localStorage.getItem("videoplayer-current-time")){
    iframePlayer.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
}


