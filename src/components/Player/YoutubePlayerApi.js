/**
 * Asynchronously loading youtube API
 * by adding script tag to the HTML file
 *
 * Returns a promise that is resolved when
 * Youtube API is loaded and ready to use
 * @returns {Promise}
 */

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