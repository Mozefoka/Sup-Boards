'use strict';

const playBtn = document.querySelector('.specs__play-btn');
const video = document.querySelector('.specs__video');
const videoFile = document.querySelector('.specs__video-file');
const cross = document.querySelector('.specs__video-cross');

playBtn.addEventListener ('click', function() {
	if (!video.classList.contains('specs__video--active')) {
		video.classList.add('specs__video--active');
	}
});

cross.addEventListener('click', function() {
	videoFile.pause();
	videoFile.currentTime = 0;
	video.classList.remove('specs__video--active');
 });