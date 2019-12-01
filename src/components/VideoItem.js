import React from 'react';

// Styling and classname's are from Semantic UI
// destructured the props.video so i dont have to repeat props.video... every time
const VideoItem = ({ video }) => {
    return (
        <div className="item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;
