import React from 'react';
import { Card } from './card';

let keyId = 0;
const Hand = ({ hand, visible }) => (
  <div className="playingCards simpleCards">
    {hand.map(({rank, suit, weight}) => (
      <Card rank={rank} suit={suit} weight={weight} key={`Hand-id-${keyId++}`}
        visible={visible} />
    ))}
  </div>
);

export {
  Hand,
};
