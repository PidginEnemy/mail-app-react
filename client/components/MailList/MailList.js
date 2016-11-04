import React, {Component} from 'react';
import Loader from '../Loader/Loader';

class MailList extends Component {

    state = {
        isLoading: true
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            });
        },1000);
    }

    render() {

        const loader = this.state.isLoading ? <Loader/> : null;

        return (
            <div>{loader} Mail List</div>
        );
    }
}

export default MailList;