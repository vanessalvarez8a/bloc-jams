var albumPicasso = {
  name: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: '/images/album-placeholder.png',
  songs: [
    { name: 'Blue', length: '4:26' },
    { name: 'Green', length: '3:14' },
    { name: 'Red', length: '5:01' },
    { name: 'Pink', length: '3:21' },
    { name: 'Magenta', length: '2:15' },
  ]
};

var albumMarconi = {
  name: 'The Telephone',
  artist: 'Guglielmo Marconi',
  label: 'EM',
  year: '1909',
  albumArtUrl: '/images/album-placeholder.png',
  songs: [
    { name: 'Hello Operator?', length: '1:01' },
    { name: 'Ring ring ring', length: '5:01' },
    { name: 'Fits in your pocket', length: '3:21'},
    { name: 'Can you hear me now?', length: '3:14' },
    { name: 'Wrong phone number', length: '2:15' },
  ]
};


//// SONG ROW TEMPLATE ////

var createSongRow = function(songNumber, songName, songLength) {
  var template =
  '<tr>'
    + '  <td class="col-md-1">' + songNumber + '</td>'
    + '  <td class="col-md-9">' + songName + '</td>'
    + '  <td class="col-md-2">' + songLength + '</td>'
    + '</tr>'
    ;
    return $(template);
};

var changeAlbumView = function(album) {
    var album = albumPicasso;

    //UPDATE THE ALBUM TITLE
    var $albumTitle = $('.album-title');
    $albumTitle.text(album.name);

    // UPDATE THE ALBUM ARTIST 
    var $albumArtist = $('.album-artist');
    $albumArtist.text(album.artist);

    // UPDATE THE META INFORMATION 
    var $albumMeta = $('.album-meta-info');
    $albumMeta.text(album.year + " on " + album.label);
  
  // UPDATE THE ALBUM IMAGE
    var $albumImage = $('.album-image img');
    $albumImage.attr('src', album.albumArtUrl);

  // UPDATE THE SONG LIST
    var $songList = $('.album-song-listing');
    $songList.empty();
    var songs = album.songs;
    for ( var i = 0; i < songs.length; i++) {
      var songData = songs[i];
      var $newRow = createSongRow(i + 1, songData.name, songData.length);
      $songList.append($newRow);
    }
};


if (document.URL.match(/\/album.html/)) {
  $(document).ready(function() {
    changeAlbumView(albumPicasso);
  });
}




