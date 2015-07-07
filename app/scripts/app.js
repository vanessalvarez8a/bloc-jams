// require("./landing");
// require('./collection');
// require('./album');
// require('./profile');

var albumPicasso = {
  name: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: '/images/album-placeholder.png',
  songs: [
   { name: 'Blue', length: '4:26', audioUrl: '/music/placeholders/blue' },
   { name: 'Green', length: '3:14', audioUrl: '/music/placeholders/green' },
   { name: 'Red', length: '5:01', audioUrl: '/music/placeholders/red' },
   { name: 'Pink', length: '3:21', audioUrl: '/music/placeholders/pink' },
   { name: 'Magenta', length: '2:15', audioUrl: '/music/placeholders/magenta' }
  ]
};


 // =================  MODULE  ===============================


 blocJams = angular.module('BlocJams', ['ui.router']); 

 blocJams.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true); // this will avoid the #! in our URL instead localhost:3000/album vs localhost:3000/#!/album

  $stateProvider.state('landing', {
    url: '/',
    controller: 'Landing.controller',
    templateUrl: '/templates/landing.html'

  })

  $stateProvider.state('collection', {
     url: '/collection',
     controller: 'Collection.controller',
     templateUrl: '/templates/collection.html'
  })

  $stateProvider.state('album', {
    url: '/album',
    controller: 'Album.controller',
    templateUrl: '/templates/album.html'
  });

 }]);


 // ================= LANDING CONTROLLER  ===============================

blocJams.controller('Landing.controller', ['$scope', function($scope) {

  $scope.mainTitle = "Bloc Jams";  
  $scope.subText = "Turn the music up!";


   $scope.subTextClicked = function() {
     $scope.subText += '!';
   };

    $scope.mainTitleClicked = function() {
    function shuffle(o){ //v1.0
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
      shuffle($scope.albumURLs);
    };


  $scope.albumURLs = [
   '/images/album-placeholders/album-1.jpg',
   '/images/album-placeholders/album-2.jpg',
   '/images/album-placeholders/album-3.jpg',
   '/images/album-placeholders/album-4.jpg',
   '/images/album-placeholders/album-5.jpg',
   '/images/album-placeholders/album-6.jpg',
   '/images/album-placeholders/album-7.jpg',
   '/images/album-placeholders/album-8.jpg',
   '/images/album-placeholders/album-9.jpg',
  ];

 }]);

 // ================= COLLECTION CONTROLLER  ===============================

 blocJams.controller('Collection.controller', ['$scope','SongPlayer', function($scope, SongPlayer) {
  $scope.albums = [];
   for (var i = 0; i < 33; i++) {
     $scope.albums.push(angular.copy(albumPicasso));
   }
 
   $scope.playAlbum = function(album){
     SongPlayer.setSong(album, album.songs[0]); // Targets first song in the array.
   }
   
}]);

 // ================= ALBUM CONTROLLER  ===============================

 blocJams.controller('Album.controller', ['$scope', 'SongPlayer', function($scope, SongPlayer) {
   $scope.album = angular.copy(albumPicasso);

  var hoveredSong = null;
  


  // onHover offHover functionality 
   $scope.onHoverSong = function(song) {
     hoveredSong = song;
   };
 
   $scope.offHoverSong = function(song) {
     hoveredSong = null;
   };

  // playing-pause functionality  
  $scope.playSong = function(song) {
    SongPlayer.setSong($scope.album, song);
    SongPlayer.play();
  };

  $scope.pauseSong = function(song) {
    SongPlayer.pause();
  };

  // state functionality

   $scope.getSongState = function(song) {
     if (song === SongPlayer.currentSong && SongPlayer.playing) {
       return 'playing';
     }
     else if (song === hoveredSong) {
       return 'hovered';
     }
     return 'default';
   };

 }]);

  // ================= PLAYER-BAR CONTROLLER  ===============================

blocJams.controller('PlayerBar.controller', ['$scope', 'SongPlayer', function($scope, SongPlayer) {
  $scope.songPlayer = SongPlayer;
}]);
 
 blocJams.service('SongPlayer', function() {
  var currentSoundFile = null;
  var trackIndex = function(album, song) {
    return album.songs.indexOf(song);
  };
   return {
     currentSong: null,
     currentAlbum: null,
     playing: false,
 
     play: function() {
       this.playing = true;
       currentSoundFile.play();
     },
     pause: function() {
       this.playing = false;
       currentSoundFile.pause();
     },
     next: function() {
       var currentTrackIndex = trackIndex(this.currentAlbum, this.currentSong);
       currentTrackIndex++;
       if (currentTrackIndex >= this.currentAlbum.songs.length) {
         currentTrackIndex = 0;
       }
      var song = this.currentAlbum.songs[currentTrackIndex];
      this.setSong(this.currentAlbum, song);
     },
     previous: function() {
       var currentTrackIndex = trackIndex(this.currentAlbum, this.currentSong);
       currentTrackIndex--;
       if (currentTrackIndex < 0) {
         currentTrackIndex = this.currentAlbum.songs.length - 1;
       }
 
      var song = this.currentAlbum.songs[currentTrackIndex];
      this.setSong(this.currentAlbum, song);
     },
     setSong: function(album, song) {
      if (currentSoundFile) {
        currentSoundFile.stop();
      }
       this.currentAlbum = album;
       this.currentSong = song;
      currentSoundFile = new buzz.sound(song.audioUrl, {
        formats: [ "mp3" ],
        preload: true
    });
 
    this.play();
     }
   };
 });






















