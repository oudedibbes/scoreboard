export default function PlayerCard(props) {
  const handleClick = () => {
    props.incrementScore(props.id);
  };

  return (
    <div>
      <ul>
        <li className='Players-item'>
          <p>{props.name}</p>
          <p>{props.score}</p>
          <p>
            <button onClick={handleClick}>+ 1</button>
          </p>
        </li>
      </ul>
    </div>
  );
}
