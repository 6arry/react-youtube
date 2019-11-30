import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

// I made this a "class" based component because it is going to contain
// All or most of the state of the app
// 1) component created was SearchBar.js // src/components/SearchBar.js
// 2) in the public/index.html I linked the Semantic UI CDN
export class App extends Component {
    // Initializing state
    state = { videos: [] }; //

    onTermSubmit = async term => {
        // console.log(term);
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

    render() {
        return (
            // className ui container, gives the div a left and right margins
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                I have {this.state.videos.length} videos.
            </div>
        )
    }
}

export default App
