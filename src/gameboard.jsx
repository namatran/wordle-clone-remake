import Rows from './rows'

const Gameboard = ({ word, guesses }) => {
    return (
        <div id="game-board">
        {guesses.map((guess, i) => (
          <Rows 
            key={i} 
            word={word} 
            guess={guess} 
          />
        ))}
      </div>
    );
};
  
export default Gameboard;