import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  state = {keyword: ''}

  onInputChangeHandler = (event) => {
    this.setState({keyword: event.target.value})
    this.props.onChanged(event.target.value)
  }

  render() {

    const fontStyle = {
      fontFamily: 'Noto Serif'
    }

    return (
        <nav className="navbar navbar-expand navbar-light bg-dark mb-3 p-3">
          <h2 className="mb-0" >
            <span className="bg-light text-black p-2 mr-2" style={fontStyle}>承</span>
            <span className="d-none d-md-inline text-white" style={fontStyle}>JoJoTube</span>
          </h2>
          <form className="form-group my-2 my-lg-0 ml-sm-2 ">
            <input
              onChange={this.onInputChangeHandler}
              value={this.state.keyword}
              className="form-control form-control-lg mr-sm-2"
              type="text"
              placeholder="検索キーワード"
              aria-label="検索キーワード"
            />
          </form>
        </nav>
    );
  }
}

export default Header;