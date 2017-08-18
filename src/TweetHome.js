import React, { Component } from 'react';

import mockTweets from './mockTweets';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: 'John Doe',
        username: 'Ah_john',
        image: './dog.jpg'
      },
      message: '',
      limit: 140,
      tweets: mockTweets,
    };
  }
  handleMessageChange({ target }) {
    this.setState((prevState) => ({ message: target.value }));
  }
  handleOnTweet() {
    this.setState({
      tweets: [
        ...this.state.tweets,
        {
          user: { ...this.state.user },
          tweet: this.state.message,
        }
      ],
      message: '',
    });
  }
  render() {
    return (
      <div style={{ display: 'flex', textAlign: 'left', width: 680, margin: 'auto', flexDirection: 'column' }}>
        <div style={{ flex: 1, background: '#F4FAFE' }}>
          <TweetBox 
            {...this.state.user}
            message={this.state.message}
            onMessageChange={this.handleMessageChange.bind(this)}
            limit={this.state.limit}
            onTweetClick={this.handleOnTweet.bind(this)}
          />
        </div>
        <div style={{ flex: 1, background: 'white', display: 'flex', flexDirection: 'column-reverse' }}>
          {this.state.tweets.map((e, i) => <Tweet key={i} {...e.user} tweet={e.tweet} />)}
        </div>
      </div>
    );
  }
}

function TweetBox(props) {
  const textRemaining = props.limit - props.message.length;
  const isButtonDisable = !props.message.length || textRemaining < 0;
  return (
    <div style={{ height: 150, display: 'flex' }}>
      <div style={{ flex: 1, position: 'relative' }}>
        <img
          style={{ 
            borderRadius: '50%',
            left: 28,
            position: 'absolute',
            top: 13,
            width: 64,
            height: 64 
          }}
          src={props.image} 
          alt={props.name}
        />
        <h6
          style={{ 
            color: '#585858',
            left: 35,
            position: 'absolute',
            top: 60,
            width: 64,
            height: 64 
          }}
        >
          @{props.username}
        </h6>
      </div>
      <div style={{ flex: 5, padding: 10, display: 'flex', flexDirection: 'column' }}>
        <textarea
          placeholder={'What\'s happening?'}
          wrap="hard"
          style={{
            resize: 'none',
            width: '95%',
            display: 'inline-block',
            borderColor: '#55acee',
            minHeight: 60,
            fontSize: 16,
            padding: 10,
          }}
          onChange={props.onMessageChange}
          value={props.message}
        />
        <div style={{ alignSelf: 'flex-end', paddingTop: 10, display: 'flex', flexDirection: 'row' }}>
          <h4
            style={{
              alignSelf: 'center',
              marginRight: 10,
              color: textRemaining < 0 ? 'red' : '#585858',
            }}
          >
            {textRemaining}
          </h4>
          <button
            style={{
              background: '#A7DBFB',
              border: 'none',
              width: 80,
              padding: '6px 16px',
              borderRadius: 100,
              color: 'white',
              fontWeight: 700,
              fontSize: 14,
              marginRight: 10,
              cursor: isButtonDisable ? 'default' : 'pointer',
              opacity: isButtonDisable ? .3 : 1,
            }}
            disabled={isButtonDisable}
            onClick={props.onTweetClick}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

function Tweet(props) {
  return (
    <div style={{ height: 'auto', display: 'flex', borderBottom: '1px solid #e6ecf0' }} className="tweet">
      <div style={{ flex: 1, position: 'relative' }}>
        <img
          style={{ 
            borderRadius: '50%',
            left: 28,
            position: 'absolute',
            top: 13,
            width: 64,
            height: 64 
          }}
          src={props.image} 
          alt={props.name}
        />
      </div>
      <div style={{ flex: 5, padding: 10, display: 'flex', flexDirection: 'column' }}>
        <div>
          <strong>{props.name}</strong> {' '} <span style={{ color: '#585858' }}>@{props.username}</span>
        </div>
        <p style={{ whiteSpace: 'pre-line' }}>{props.tweet}</p>
      </div>
    </div>
  );
}
