import React, {Component} from 'react';

class App extends Component {

    static propTypes = {};

    render() {
        return (
            <div className="container">
                <h1>My React Application!</h1>
                <span className="glyphicon glyphicon-heart"></span>
                {this.props.children}
            </div>
        );
    }
}

export default App;