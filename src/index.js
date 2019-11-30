import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App'

// This allows us to render our app in the public/index.html file
// inside of the <div id="root"></div>
ReactDom.render(<App />, document.getElementById('root'));