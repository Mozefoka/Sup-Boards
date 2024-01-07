'use strict';

const playBtn = document.querySelector('.play-btn');
const video = document.querySelector('.video');
const videoFile = document.querySelector('.video-file');
const cross = document.querySelector('.video-cross');

playBtn.addEventListener ('click', function() {
	if (!video.classList.contains('video--active')) {
		video.classList.add('video--active');
	}
});

cross.addEventListener('click', function() {
	videoFile.pause();
	videoFile.currentTime = 0;
	video.classList.remove('video--active');
 });