class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {videos: [], video: {}};
    this.handleClick = this.handleClick.bind(this);
    // this.searchYouTube = searchYouTube(options, function(videos) {
    //   this.setState({
    //     videos: videos,
    //     video: videos[0]
    //   });
    // });
  }

  componentDidMount() {
    this.searchCaller('games');
  }


  handleClick(index) {
    this.setState(state => ({
      video: this.state.videos[index]
    }));
  }

  searchCaller(query) {
    var options = {
      query: query,
      max: 5,
      key: window.YOUTUBE_API_KEY
    };

    this.props.searchYouTube(options, function(videos) {
      this.setState({
        videos: videos,
        video: videos[0]
      });
    });
  }






  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* <VideoPlayer video={this.state.video} /> */}
            {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handler={this.handleClick} />
            {/*<div><h5><em>videoList</em> view goes here</h5></div>*/}
          </div>
        </div>
      </div>
    );
  }
}

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> view goes here</h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> view goes here</h5></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

//class GroceryListItem extends React.Component {