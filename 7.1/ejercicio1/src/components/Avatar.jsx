import React from 'react';
import IconoOnline from './IconoOnline';

const Avatar = ({ url, isOnline }) => {
  console.log("Rendering: Avatar");
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={url} alt="avatar" style={{ width: '50px', borderRadius: '50%', marginBottom: '5px' }} />
      <IconoOnline isOnline={isOnline} />
    </div>
  );
};

export default Avatar;