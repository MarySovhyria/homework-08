import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const newPlayer = new Player(iframe);

newPlayer.on('timeupdate', throttle(update, 1000));
function update(seconds) {
    localStorage.setItem('video-current-time', seconds.seconds)
}
newPlayer.setCurrentTime(localStorage.getItem('video-current-time'));