// src/components/AddPlayerForm.js
import { useState } from 'react';
import './Player.scss';

export default function AddPlayerForm(props) {
  const [name, set_name] = useState('');
  const [score, set_score] = useState('');
  return (
    <div className='AddPlayerForm row'>
      <p>Add a new player: </p>
      <p>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(event) => {
            set_name(event.target.value);
          }}
        />{' '}
      </p>
      <p>
        <input
          type='text'
          placeholder='Score'
          value={score}
          onChange={(event) => {
            set_score(event.target.value);
          }}
        />{' '}
      </p>

      <p>
        <button
          onClick={() => {
            props.addPlayer(name, score);
            set_name('');
            set_score('');
          }}
        >
          Add
        </button>
      </p>
    </div>
  );
}
