import React, { Component } from 'react'

export class SearchBar extends Component {
    // initialize state on the component
    // storing our data in the component and NOT the DOM
    // the { term: } property is basically what you are searching for
    state = { term: 'Search for your favorite video' }

    // Callback method; event = e; event handler
    onInputChange = e => {
        // this allows us to update the state of the { term: } property
        this.setState({ term: e.target.value })
    }

    // Callback method for the form; form is a child element
    onFormSubmit = e => {
        // This prevents the browser from refreshing the page 
        // when someone hits ENTER, SEARCH, SUBMIT, etc. "SUBMIT"
        e.preventDefault();

        // Callback from parent component
        // onFormSubmit is a prop inside of App.js on <SearchBar />
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            // className ui segment, gives style and a border
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        {/* Turning <input> from a UNCONTROLLED 
                        <input> into a CONTROLLED <input> */}
                        <input 
                            type="text" 
                            // hooking it to the state of the SearchBar class; the value is what you are typing
                            value={this.state.term}
                            // onChange allows you to type into the <input> field without it you can NOT change anything in the field
                            // 
                            onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
