import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './style/iconfont/iconfont.css';

import locationImg from './images/location.png'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Shortcut/>
            </div>
        );
    }
}

class Shortcut extends Component {
    render() {
        return (
            <div id='shortcut'>
                <ul className='shortcut'>
                    <li>
                        <div>
                            <img id='location' src={locationImg} alt=""/>
                            上海
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="#">你好，请登录</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="#">免费注册</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="#">我的订单</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="#">我的京东</a>
                        </div>
                    </li>
                    <li>
                        <div><a href="#">京东会员</a></div>
                    </li>
                    <li>
                        <div><a href="#">企业采购</a></div>
                    </li>
                    <li>
                        <div><a href="#">客户服务</a></div>
                    </li>
                    <li>
                        <div><a href="#">网站导航</a></div>
                    </li>
                    <li>
                        <div><a href="#">手机京东</a></div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default App;
