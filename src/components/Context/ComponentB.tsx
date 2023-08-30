import React, { useContext } from 'react'
import { ChannelContext } from './Context';

const ComponentB = () => {

  const profile = useContext(ChannelContext);

  return (
    <div>
      Profile : {profile}
    </div>
  )
}

export default ComponentB;