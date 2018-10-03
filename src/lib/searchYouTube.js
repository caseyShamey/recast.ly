var searchYouTube = ({query, max = 5, key}, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {part: 'snippet',
      q: query,
      maxResults: max,
      videoEmbeddable: 'true',
      key: key,
      type: 'video',
    },
    success: function(videos) {
      console.log('key', key);
      return function(videos) {
        callback(videos);
      };
    },
    error: function(error) {
      console.error('error', error);
    },
    dataType: 'json'

  });
  // .done(function(videos) {
  //   console.log('vidoes', videos);
  //   callback(videos);
  // })
  // .fail(function(error) {
  //   console.error('error', error);
  // });
};

window.searchYouTube = searchYouTube;
