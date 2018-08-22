import React from 'react';

const Title = (props) => {
  return(
    <div>
      <h1 style={props.titleStyle}>{props.title}</h1>
    </div>
  )
}
export default Title;
