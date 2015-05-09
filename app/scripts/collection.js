 // THIS VARIABLE IS GOING TO OVERWRITE THE CODE INSIDE THE HTML
 var buildAlbumThumbnail = function() {
    var template =
        '<div class="collection-album-container col-md-2">'
      + '  <img src="/images/album-placeholder.png"/>'
      + '  <div class="caption album-collection-info">'
      + '    <p>'
      + '      <a class="album-name" href="/album.html"> Album Name </a>'
      + '      <br/>'
      + '      <a href="/album.html"> Artist name </a>'
      + '      <br/>'
      + '      X songs'
      + '      <br/>'
      + '    </p>'
      + '  </div>'
      + '</div>';
 
   return $(template);
 };
 
 // THIS VARIABLE EMPTY ANYTHING THAT IS INSIDE .collection-container and .row 
 // AND IT WOULD REPEAT 36 TIMES THE OVERWRITTEN INFO THAT IS NOW A JQUERY OBJECT

var updateCollectionView = function() {
   var $collection = $('.collection-container .row');
   $collection.empty();
//
   for (var i = 0; i < 36; i++) {
    var $newThumbnail = buildAlbumThumbnail();
    $collection.append($newThumbnail);
    }
};

if(document.URL.match(/\/collection.html/)) {
  // Wait until the HTML is fully processed.
  $(document).ready(function() {
  // WHEN THE PAGE LOADS THE CODE WILL EXECUTE 
    updateCollectionView();
    
  });
}