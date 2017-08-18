import React from 'react';
import { compose, mapProps, flattenProp } from 'recompose';

const enhance = compose(
  mapProps(({ limit, message, ...rest }) => ({
    ...rest,
    limit,
    message,
    textRemaining: limit - message.length
  })),
  mapProps(({ textRemaining, message, ...rest }) => ({
    ...rest,
    textRemaining,
    message,
    isButtonDisable: !message.length || textRemaining < 0,
  })),
  flattenProp('user'),
);

const TweetBox = props => (
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
            color: props.textRemaining < 0 ? 'red' : '#585858',
          }}
        >
          {props.textRemaining}
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
            cursor: props.isButtonDisable ? 'default' : 'pointer',
            opacity: props.isButtonDisable ? .3 : 1,
          }}
          disabled={props.isButtonDisable}
        >
          Tweet
        </button>
      </div>
    </div>
  </div>
);

export default enhance(TweetBox);
