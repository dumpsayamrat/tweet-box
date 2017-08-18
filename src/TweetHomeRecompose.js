import React from 'react';
import Tweets from './Tweets';
import TweetBox from './TweetBox';

const TweetHome = () => (
  <div style={{ display: 'flex', textAlign: 'left', width: 680, margin: 'auto', flexDirection: 'column' }}>
    <div style={{ flex: 1, background: '#F4FAFE' }}>
      <TweetBox />
    </div>
    <div style={{ flex: 1, background: 'white', display: 'flex', flexDirection: 'column-reverse' }}>
      <Tweets />
    </div>
  </div>
);

export default TweetHome;
