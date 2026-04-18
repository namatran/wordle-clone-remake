const Rows = ({ word, guess }) => {
    // Build frequency map ONCE per guess
    const freq = {};
    for (const l of word) {
        freq[l] = (freq[l] || 0) + 1;
    }

    // First pass: Mark all CORRECT (green) letters and use up their count
    for (let i = 0; i < word.length; i++) {
        if (guess[i] === word[i]) {
            freq[guess[i]]--; // Use up one instance of the letter
        }
    }

    const getLetterStatus = (letter, index) => {
        // If it's in the correct position, return green
        if (word[index] === letter) {
            return "correct";
        }

        // If the letter is in the word and there's an unused instance, mark as yellow
        if (freq[letter] > 0) {
            freq[letter]--; // Use up one instance (prevent future yellows)
            return "present";
        }

        return "absent";


        /*
        Set max = first number
        For each number in the list:
            If number > max, then max = number
        Return max   
        */
    };

    return (
      <div className="row">
        {guess.split('').map((letter, i) => (
            <div key={i} className={`tile ${getLetterStatus(letter, i)}`}>
                {letter}
            </div>
        ))}   
      </div>
    );
};
  
export default Rows;