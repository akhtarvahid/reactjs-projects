import _ from 'lodash';
import React, {Component} from 'react';
import SearchBar from './search_bar';
import YTsearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoListDetail from './video_detail';

const API_KEY = 'AIzaSyDSuQh6g6dKUJhg6OJVdEIJqdDVxsSNUNA';


class App extends Component{
  constructor(props){
   super(props);
   this.state = { 
     videos:[],
     selectedVideo:null
  };
  this.videoSearch('surfboards');

}

 videoSearch(term){
  YTsearch({key: API_KEY, term: term},(videos) => {
    this.setState({
      videos:videos,
      selectedVideo:videos[0],
    });
  })
 }

  render(){
   
   const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
    
  return (
    <div>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoListDetail video={this.state.selectedVideo}/>
      <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
    </div>
  );
};
}

export default App;