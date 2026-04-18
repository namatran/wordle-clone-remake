# Wordle Clone

Built from-scratch a remake of the Wordle game in ReactJS with no AI, only fundamentals and google. The goal was to understand and implement the core React logic independently, but needed help on the letter-frequency algorithm that makes duplicate letter handling work correctly.

## How the Algorithm Works

The core challenge is correctly handling duplicate letters across the correct / present / absent (green / yellow / gray) states.

**The approach: frequency map + two-pass evaluation**

1. Build a frequency map of every letter in the answer
2. **First pass** — identify all correct (green) positions and decrement those letters from the map, "reserving" them
3. **Second pass** — for remaining positions, check if the guessed letter still has unused instances in the map; if so, mark it present (yellow) and decrement; otherwise, absent (gray)

This prevents a single letter in the answer from producing two yellows when only one instance is unaccounted for.

```js
const freq = {};
for (const l of word) {
  freq[l] = (freq[l] || 0) + 1;
}

// First pass: reserve green letters
for (let i = 0; i < word.length; i++) {
  if (guess[i] === word[i]) {
    freq[guess[i]]--;
  }
}

// Second pass: evaluate yellows and grays
const getLetterStatus = (letter, index) => {
  if (word[index] === letter) return "correct";
  if (freq[letter] > 0) {
    freq[letter]--;
    return "present";
  }
  return "absent";
};
```

---

## Features

- 6 guesses, 5-letter words — standard Wordle rules
- Color-coded feedback per guess (green / yellow / gray)
- Keyboard UI that updates with letter states
- Win/loss detection with end state display
- Word list pulled from a curated dictionary

## Tech Stack

- **React** — component architecture, state management with hooks
- **CSS** — custom styling, no UI libraries
