import React from "react";
import { range } from "../../utils";

function Guess({ guess, wordLength }) {
  // If guess is undefined, replace with array of blank letters.
  guess =
    guess ||
    range(wordLength).map((i) => ({
      letter: "",
    }));

  return (
    <p className="guess">
      {guess.map((l, i) => (
        <span className={l.status ? `cell ${l.status}` : "cell"} key={i}>
          {l.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
