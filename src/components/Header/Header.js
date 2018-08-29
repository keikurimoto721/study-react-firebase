import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  state = {keyword: ''}

  onInputChangeHandler = (event) => {
    this.setState({keyword: event.target.value})
    this.props.onChanged(event.target.value)
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
        </div>
    );
  }
}

export default Header;
