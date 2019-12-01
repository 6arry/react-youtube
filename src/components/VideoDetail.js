import React from 'react';

const VideoDetail = ({ video }) => {
    // this renders on the page if there is no video. ({ selectVideo: null })
    if (!video) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
                </div>
        </div>
    );
}

export default VideoDetail;
