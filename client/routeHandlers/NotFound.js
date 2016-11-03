import React, {Component} from 'react';

class NotFound extends Component {
    render() {
        return (
            <div>
                <div className="not-found">
                    <span className="glyphicon glyphicon-alert"></span>
                    <h1>Page not found</h1>
                </div>
            </div>
        );
    }
}

export default NotFound;
