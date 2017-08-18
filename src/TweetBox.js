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
        style={styles.imageStyle}
        src={props.image} 
        alt={props.name}
      />
      <h6
        style={styles.usernameStyle}
      >
        @{props.username}
      </h6>
    </div>
    <div style={{ flex: 5, padding: 10, display: 'flex', flexDirection: 'column' }}>
      <textarea
        placeholder={'What\'s happening?'}
        wrap="hard"
        style={styles.textareaStyle}
        onChange={props.onMessageChange}
        value={props.message}
      />
      <div style={{ alignSelf: 'flex-end', paddingTop: 10, display: 'flex', flexDirection: 'row' }}>
        <h4
          style={{
            ...styles.textRemainingStyle, 
            color: props.textRemaining < 0 ? 'red' : '#585858'
          }}
        >
          {props.textRemaining}
        </h4>
        <button
          style={{
            ...styles.buttonStyle,
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

const styles = {
  usernameStyle: { 
    color: '#585858',
    left: 35,
    position: 'absolute',
    top: 60,
    width: 64,
    height: 64 
  },
  textareaStyle: {
    resize: 'none',
    width: '95%',
    display: 'inline-block',
    borderColor: '#55acee',
    minHeight: 60,
    fontSize: 16,
    padding: 10,
  },
  imageStyle: { 
    borderRadius: '50%',
    left: 28,
    position: 'absolute',
    top: 13,
    width: 64,
    height: 64 
  },
  textRemainingStyle: {
    alignSelf: 'center',
    marginRight: 10,
  },
  buttonStyle: {
    background: '#A7DBFB',
    border: 'none',
    width: 80,
    padding: '6px 16px',
    borderRadius: 100,
    color: 'white',
    fontWeight: 700,
    fontSize: 14,
    marginRight: 10,
  },
};

export default enhance(TweetBox);
