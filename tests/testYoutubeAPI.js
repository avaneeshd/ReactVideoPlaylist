var request = require('request');
var expect = require('Chai').expect;
var PlaylistStore = require('../build/stores/PlaylistStore');
var PlaylistActions = require('../build/actions/PlayListActions');
describe('Testing Playlist Store', function () {
	before(function () {
		//server.listen(3000);
	});

	it('should return playlist items', function (done) {
		PlaylistStore.default.fetchPlaylist("Elton John", function(err, playlistItems, playlist){
			expect(playlistItems.length).to.equal(10);
			expect(playlist.length).to.equal(10);
			done();
		});
	});

	it('should set default artist', function (done){
		PlaylistStore.default.fetchPlaylist("Elton John", function(err, playlistItems, playlist){
			expect(PlaylistStore.default._currentArtist).to.equal("Elton John");
			done();
		});
	});

	it('should set current video on play', function(done){
		PlaylistStore.default.fetchPlaylist("Elton John", function(err, playlistItems, playlist){
			PlaylistStore.default.playVideo(playlist[2]);
			expect(PlaylistStore.default.getCurrentVideo()).to.have.property('snippet');
			done();
		});
	});

	it('should change artist', function(){
		PlaylistActions.default.fetch("Stevie Wonder");
		expect(PlaylistStore.default.getCurrentArtist()).to.equal("Stevie Wonder");
	});

	after(function () {
		//server.close();
	});
});
