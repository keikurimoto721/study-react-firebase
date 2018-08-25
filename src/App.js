import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Title/Title';
import Title from './components/Title/Title';

class App extends Component {
  
  onClickHandler = () => {
    // click時に発火する
    // タイトルを上書きしてボタンを消す
    console.log("更新ボタンがクリックされました");
    document.getElementById('versionCounter').textContent = "2.0";
    document.getElementById('upgradeButton').style.display = "none";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title
            titleStyle={{color: 'orange'}}
            onClick={this.onClickHandler}
          >へい、おまち<span id="versionCounter" style={{borderBottom: '1px solid orange'}}>1.0</span>
          </Title>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
