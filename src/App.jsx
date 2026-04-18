import { useState } from 'react'
import Gameboard from './gameboard';
import Rows from './rows';

function App() {
  const [word] = useState('hello')
  const [status, setStatus] = useState('');
  const [guesses, setGuesses] = useState([])
  const [guess, setGuess] = useState('');

  const handleGuess = (e) => {
    e.preventDefault(); // ✅ Prevent page reload

    if (guess.length !== 5) {
      alert("Guess must be 5 letters long!");
      return;
    }

    if (guess === word) {
      setStatus('win');
    }
    if (guesses.length == 5) {
      setStatus('lose');
    }
    setGuesses([...guesses, guess]); // Adds previous entries of guesses with new entry

    setGuess(''); // ✅ Clear input after guessing
  };

  return (
    <>
      <h1>Wordle</h1>

      <Gameboard
        word={word}
        guesses={guesses}
      />

      {status === '' && 
        <form>
          <div>
            <input 
              placeholder="Enter guess..." 
              value={ guess } 
              onChange={(e) => setGuess(e.target.value.toLowerCase())}
              maxLength={5}
            />
            
            <button onClick={ handleGuess }>
              Enter
            </button>
          </div>

        </form>
      }
      {status === 'win' && <p>You Win!</p>}
      {status === 'lose' && <p>You Lose!</p>}
    </>
  )
}

export default App
