import React from 'react';
import './Title.css';

const Title = (props) => {
  return(
    <div className="titleSection">

      <h2
        style={props.titleStyle}
        id="versionStatement"
      >
        {props.children}
      </h2>

      <p
        onClick={props.onClick}
        id="upgradeButton"
        className="upgrade-button"
      >
        バージョンUP
      </p>

    </div>
  );
}
export default Title;
