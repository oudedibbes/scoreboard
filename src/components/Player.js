// src/components/Player.js
import './Player.scss';

export default function Player(props) {
  // the event listener callback
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    props.incrementScore(props.id);
  };

  return (
    <li className='Players-item'>
      <p>{props.name}</p>
      <p>(score: {props.score})</p>
      <p>
        <button onClick={onClickIncrement}>increment + 1</button>
      </p>
      <div
        className='percentage_coloring'
        style={{ width: props.score + '%' }}
      />
    </li>
  );
}
