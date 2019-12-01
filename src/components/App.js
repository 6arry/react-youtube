import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';

// I made this a "class" based component because it is going to contain
// All or most of the state of the app
// 1) component created was SearchBar.js // src/components/SearchBar.js
// 2) in the public/index.html I linked the Semantic UI CDN
export class App extends Component {
    // Initializing state
    state = { videos: [], selectedVideo: null };

    // Callback method anytime someone submits the SearchBar <form>
    // this allows the data to be passed to SearchBar.js to the 
    // onFormSubmit method inside of the class SearchBar component
    onTermSubmit = async term => {
        // console.log(term);
        // The term will be passed down through the props system
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        // console.log(response); // whole response object
        // response.data.items // the data list of videos relavent in the response
        // this sets the state on the App.js component of the { videos: [] } property
        this.setState({ videos: response.data.items })
    }

    onVideoSelect = video => {
        // console.log('From the app!', video)
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            // className ui container, gives the div a left and right margins
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                {/* this div wraps all the child div's and puts the grid call to them */}
                <div className="ui grid">
                    {/* this div puts all the components into one row */}
                    <div className="row">
                        {/* this div is 11 out of 16 columns wide (semantic ui grid) */}
                        <div className="eleven wide column">
                            {/* video prop allows the state property { selectedVideo: null } to be
                            passed down to a child component*/}
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        {/* this div is 5 out of 16 columns wide (semantic ui grid) */}
                        <div className="five wide column">
                            {/* 1. videos prop allows the state property { videos: [] } array to be
                            passed down into the VideoList.js component */}
                            {/* 2. onVideoSelect prop allows the callback method to be passed down into the VideoList.js component */}
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
