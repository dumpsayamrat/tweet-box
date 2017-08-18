import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import Tweets from './Tweets';
import TweetBox from './TweetBox';

const limit = 140;
const user = {
  name: 'John Doe',
  username: 'Ah_john',
  image: './dog.jpg'
};

const enhance = compose(
  withState('limit', 'updateLimit', limit),
  withState('user', 'updateUser', user),
  withState('message', 'updateMessage', ''),
  withHandlers({
    onMessageChange: ({ updateMessage }) => ({ target }) => updateMessage(() => target.value)
  }),
);

const TweetHome = props => (
  <div style={{ display: 'flex', textAlign: 'left', width: 680, margin: 'auto', flexDirection: 'column' }}>
    <div style={{ flex: 1, background: '#F4FAFE' }}>
      <TweetBox
        user={props.user}
        message={props.message}
        onMessageChange={props.onMessageChange}
        limit={props.limit}
      />
    </div>
    <div style={{ flex: 1, background: 'white', display: 'flex', flexDirection: 'column-reverse' }}>
      <Tweets />
    </div>
  </div>
);

export default enhance(TweetHome);
