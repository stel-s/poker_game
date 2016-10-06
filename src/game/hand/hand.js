import React from 'react';
import { Card } from './card';

let keyId = 0;

const Hand = ({ hand }) => (
  <div className="playingCards simpleCards">
    {hand.map(({rank, suit}) => (
      <Card rank={rank} suit={suit} key={`Hand-id-${keyId++}`} />
    ))}
  </div>
);

export {
  Hand,
};