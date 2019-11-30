import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

export class App extends Component {
    onTermSubmit = term => {
        // console.log(term);
        youtube.get('/search', {
            params: {
                q: term
            }
        })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        )
    }
}

export default App
