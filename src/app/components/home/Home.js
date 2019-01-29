import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Top/>
            </div>
        );
    }
}

class Top extends Component {
    render() {
        return (
            <div className="top">
                Topddddd
            </div>
        );
    }
}

export default Home;