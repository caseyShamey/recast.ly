var searchYouTube = ({query, max = 5, key}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search/', {
    part: 'snippet',
    q: query,
    maxResults: max,
    videoEmbeddable: 'true',
    key: key,
    type: 'video',
  })
    .done(function(videos) {
      callback(videos.items);
    })
    .fail(function(error) {
      console.error('error', error);
    });
};
  // .done(function(videos) {
  //   console.log('vidoes', videos);
  //   callback(videos);
  // })
  // .fail(function(error) {
  //   console.error('error', error);
  // });


window.searchYouTube = searchYouTube;
