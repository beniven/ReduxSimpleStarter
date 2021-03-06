declare module models {
    interface IVideoListProps {
        videos?: Array<any>;
        onVideoSelect?: Function;
    }
    
    interface IVideo {
        etag?: string;
        id?: {
            kind?: string;
            videoId?: string;
        }
        kind?: string;
        snippet?: IVideoSnippet;
    }
    
    interface IVideoSnippet {
        channelId?: string;
        channelTitle?: string;
        description?: string;
        liveBroadcastContent?: string;
        publishedAt?: string;
        thumbnails?: {
            default?: IVideoThumbnail;
            medium?: IVideoThumbnail;
            heigh?: IVideoThumbnail;
        };
        title?: string;
    }
    
    interface IVideoThumbnail {
        width?: number;
        height?: number;
        url?: string;
    }

    interface ISearchState {
        term?: string;
    }
    
    interface ISearchProps {
        onSearchTermChange?: Function;
    }
}