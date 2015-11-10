## Yahoo Video Playlist Application

> This is a simple demo application developed using Facebook's [React](https://facebook.github.io/react/) and [Flux](http://facebook.github.io/flux/) architecture
> and runs on a [Node.js](https://nodejs.org/) / [Express](http://expressjs.com/) server.
> This application allows you to play videos from youtube by various artists.

### Technologies Used:
* Node.JS
* Express
* React
* Flux
* Gulp
* ES6
* Babel.JS
* Material UI
* Browserify

### Getting Started

Install [Node.js](https://nodejs.org/) and NPM if not already installed.
Just [clone](https://github.com/avaneeshd/YahooVideoPlaylist.git) this repository

```shell
$ git clone https://github.com/avaneeshd/YahooVideoPlaylist.git YahooVideoPlaylist
$ cd YahooVideoPlaylist
$ npm install                   # Install Node.js components listed in ./package.json
$ npm install -g gulp           # Install Gulp globally if not installed
$ npm install -g babel          # Install babel globally if not installed
```

### How to Run
This application uses [Gulp] to create a build and start the local server
Just run gulp command in the applications root folder to start the server

```shell
$ gulp 
```
then your server should start at [http://localhost:3000](http://localhost:3000)
open this url in your browser to run the applicaiton.

### How to test
Runs simple mocha tests to check the youtube API and playlist store

```shell
$ npm test
```

### Documentation
Additional documents about this application can be found in docs directory


