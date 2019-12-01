import './VideoItem.css';
import React from 'react';

// Styling and classname's are from Semantic UI
// destructured the props.video so i dont have to repeat props.video... every time
const VideoItem = ({ video, onVideoSelect }) => {
    return (
        // onClick needs an arrow function to be able to pass a video into onVideoSelect
        // back up to the parent component (App) using the callback method inside of the class App component
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;
