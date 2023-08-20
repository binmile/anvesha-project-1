import React from 'react';

type ContainerProps = {
    styles:React.CSSProperties
}

const Container = (props:ContainerProps) => {
  return (
    <div>
        <div style={props.styles}>
            Text content goes here
        </div>
    </div>
  )
}

export default Container;