import * as React from 'react';

interface IVideoListProps {
    videos?: Array<any>;
}

class VideoList extends React.Component<IVideoListProps, {}> {
    render() {
        return (
            <ul className="col-md-4 list-group">
                {this.props.videos.length}
            </ul>
        );
    }
};

export default VideoList;