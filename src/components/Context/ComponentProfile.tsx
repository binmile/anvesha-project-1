import React, { useContext } from 'react'
import { ChannelContext } from './Context';

const ComponentProfile = () => {

  const profile = useContext(ChannelContext);

  return (
    <div>
      Profile : {profile}
    </div>
  )
}

export default ComponentProfile;