import * as React from 'react';
import * as ReactDOM from 'react-dom';
const YTSearch = require('youtube-api-search');
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyCj2hgV0bAlwBy4lLlztpnOBdApa9nDA_c';

class App extends React.Component {
    constructor(props: any) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos: any) => {
            this.setState({ videos });
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
