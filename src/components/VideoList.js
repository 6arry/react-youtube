import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => { // instead of using '= props =>' I desctructured the prop by using '= ({ video }) =>'
    // Any time VideoList component is rendered on the screen
    // data is passed through the props system as props.videos array
    // from the state of the class App from the property of videos

    // Because videos is an array from the App component
    // we can map over the videos array
    const renderedList = videos.map(video => {
        return <VideoItem video={video}/>
    })

    return (
        <div className="ui relaxed divided list">
        {/* {props.videos.length} // testing of prop is setup correctly */}
        {/* {videos.length} */}
            {renderedList}
        </div>
    );
}

export default VideoList;
