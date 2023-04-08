import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function onTimeupdate(data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}

const videoplayerCurrentTime = localStorage.getItem('videoplayer-current-time');

if (videoplayerCurrentTime !== null) {
  player.setCurrentTime(JSON.parse(videoplayerCurrentTime));
}

player.on('timeupdate', throttle(onTimeupdate, 1000));
