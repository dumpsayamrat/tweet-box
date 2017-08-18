import React from 'react';
import { compose, flattenProp, onlyUpdateForKeys } from 'recompose';

const enhance = compose(
  flattenProp('tweet'),
  flattenProp('user'),
  onlyUpdateForKeys(['username', 'image', 'name', 'tweet']),
);

const Tweet = props => (
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

export default enhance(Tweet);
