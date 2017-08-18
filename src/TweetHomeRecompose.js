import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import Tweet from './Tweet';
import TweetBox from './TweetBox';
import mockTweet from './mockTweets';

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
  withState('tweets', 'updateTweets', mockTweet),
  withHandlers({
    onMessageChange: ({ updateMessage }) => ({ target }) => updateMessage(() => target.value),
    onTweetClick: ({ updateTweets, updateMessage, tweets, user, message }) => () => {
      updateTweets(() => [
        ...tweets,
        {
          user,
          tweet: message,
        }
      ]);
      updateMessage(() => '');
    },
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
        onTweetClick={props.onTweetClick}
      />
    </div>
    <div style={{ flex: 1, background: 'white', display: 'flex', flexDirection: 'column-reverse' }}>
      {props.tweets.map((e, i) => <Tweet key={i} tweet={e} />)}
    </div>
  </div>
);

export default enhance(TweetHome);
