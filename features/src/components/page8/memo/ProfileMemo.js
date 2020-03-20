import React from 'react';

const ProfileMemo = props => (
  <h1>{props.authenticated ? 'You are logged in!' : 'Not logged in!'}</h1>
);

export default ProfileMemo;