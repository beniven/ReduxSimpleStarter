import * as React from 'react';
import * as ReactDOM from 'react-dom';
const YTSearch = require('youtube-api-search');
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCj2hgV0bAlwBy4lLlztpnOBdApa9nDA_c';
let styles = require('../style/style.css');

interface IAppState {
    videos?: Array<any>;
    selectedVideo?: any;
}

class App extends React.Component<{}, IAppState> {
    constructor(props: any) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('birmingham al');
    }

    videoSearch(term: string) {
        YTSearch({key: API_KEY, term}, (videos: any) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={(term: any) => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={(selectedVideo: any) => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
