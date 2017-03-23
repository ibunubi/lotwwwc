import React, { Component } from 'react';

import {render} from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                Hello world! It's work, but it is the most use less in the world xD
            </div>
        );
    }
}

render(<App/>, document.getElementById('root'));