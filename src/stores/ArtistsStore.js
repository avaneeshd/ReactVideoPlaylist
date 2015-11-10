

let artistsStore = {

	// List of Artists
	artists: [
			 'Elton John',
			 'Stevie Wonder',
			 'Frank Sinatra',
			 'Louis Armstrong',
			 'Taylor Swift' ],

	artistDetails: {
		"Elton John": {
			image:"http://cdn.old.rpp-noticias.io/programasstudio/musica/rankings/ranking-lo-mejor-de-elton-john_18905.jpg",
			name: "Elton John",
			desc:"Sir Elton Hercules John CBE is an English composer and singer, who accompanies himself on the piano." +
			" He has worked with lyricist Bernie Taupin as his songwriter partner since 1967; they have collaborated " +
			"on more than 30 albums to date",
			bornOn:"March 25, 1947"},

		"Stevie Wonder":{
			image:"https://upload.wikimedia.org/wikipedia/commons/5/54/Stevie_Wonder_1973.JPG",
			name: "Stevie Wonder",
			desc:"Stevland Hardaway Morris, known by his stage name Stevie Wonder, is an American musician, singer, songwriter, record producer, and multi-instrumentalist",
			bornOn:"May 13, 1950"
		},
		"Frank Sinatra":{
			image:"http://a5.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTE4MDAzNDEwNjg4MTE2MjM4.jpg",
			name:"Frank Sinatra",
			desc: "Francis Albert (Frank) Sinatra was an American jazz and traditional pop singer, actor, and producer, who was one of the most popular and influential musical artists of the 20th century.",
			bornOn:"December 12, 1915"
		},
		"Louis Armstrong":{
			image:"https://upload.wikimedia.org/wikipedia/commons/8/88/Louis_Armstrong_NYWTS_3.jpg",
			name:"Louis Armstrong",
			desc: "Louis Armstrong, nicknamed Satchmo or Pops, was an American jazz trumpeter, composer and singer who was one of the pivotal and most influential figures in jazz music.",
			bornOn:"August 4, 1901"
		},
		"Taylor Swift":{
			image:"https://usatlife.files.wordpress.com/2014/05/1taylorswift-mug.jpg?w=1000&h=1405",
			name:"Taylor Swift",
			desc: "Taylor Alison Swift is an American singer-songwriter and actress. Raised in Wyomissing, Pennsylvania, she moved to Nashville, Tennessee, at the age of 14 to pursue a career in country music.",
			bornOn:"December 13, 1989"
		}
	},

	getArtists(){
		// getter for artists
		return this.artists;
	}
};

export default artistsStore;