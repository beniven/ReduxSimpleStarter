import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCj2hgV0bAlwBy4lLlztpnOBdApa9nDA_c';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));
