import React from 'react'
import { ALPHABET } from '../../../constants';

const AlphabetFilter = () => {
  const alphabet = ALPHABET.split('')
  
  return (
    <ul className="game-filter">
      {
        alphabet.map(l => (
          <li>
            <a href="#">{l.toUpperCase()}</a>
          </li>
        ))
      }
    </ul>
  )
}

export default AlphabetFilter;