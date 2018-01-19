import * as React from 'react';
import VideoListItem from './video_list_item';

interface IVideoListProps {
    videos?: Array<any>;
}

class VideoList extends React.Component<IVideoListProps, {}> {
    render() {
        const videoItems = this.props.videos.map((video) => {
            return <VideoListItem key={video.etag} video={video} />
        });

        return (
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
        );
    }
};

export default VideoList;
