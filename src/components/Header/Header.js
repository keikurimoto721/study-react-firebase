import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  state = {keyword: ''}

  onInputChangeHandler = (event) => {
    this.setState({keyword: event.target.value})
  }

  render() {
    return (
        <div style={{textAlign: 'center'}}>
            <div>
                <h2>JoJoTube</h2>
            </div>
            <div>
                <input value={this.state.keyword} onChange={this.onInputChangeHandler}/>
            </div>
            <p>入力確認：{this.state.keyword}</p>
        </div>
    );
  }
}

export default Header;
