import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

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
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                I have {this.state.videos.length} videos.
            </div>
        )
    }
}

export default App
