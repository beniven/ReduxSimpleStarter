import * as React from 'react';

class SearchBar extends React.Component<{}, ISearchState> {
    constructor(props: any) {
        super(props);

        this.state = { term: 'Search' };
    }

    render() {
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}

export default SearchBar;

interface ISearchState {
    term?: string;
}
