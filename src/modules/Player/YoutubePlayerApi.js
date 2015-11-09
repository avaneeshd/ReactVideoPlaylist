const api = () => {
	return new Promise(resolve => {
		window.onYouTubeIframeAPIReady = () => {
			console.log("Youtube API loaded");
			resolve();
		}

		const tag = document.createElement('script');

		tag.src = "https://www.youtube.com/iframe_api";
		let firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	});
};


export default api;