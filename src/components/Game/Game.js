import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import Banner from "../Banner";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Game() {
  const [answer, setAnswer] = React.useState(() => {
    const answer = sample(WORDS);
    // To make debugging easier, we'll log the solution in the console.
    console.info({ answer });
    return answer;
  });

  const [status, setStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);

  function guessHandler(guess) {
    const result = checkGuess(guess, answer);
    setGuesses([...guesses, result]);

    if (guess === answer) {
      setStatus("won");
    } else if (guesses.length >= NUM_OF_GUESSES_ALLOWED - 1) {
      setStatus("lost");
    }
  }

  function playAgainHandler() {
    setGuesses([]);
    setStatus("running");

    let newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    console.info({ answer: newAnswer });
  }

  return (
    <>
      {status === "won" && (
        <Banner theme="happy" playAgainHandler={playAgainHandler}>
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>
              {" "}
              {guesses.length} {guesses.length === 1 ? "guess" : "guesses"}
            </strong>
            .
          </p>
        </Banner>
      )}
      {status === "lost" && (
        <Banner theme="sad" playAgainHandler={playAgainHandler}>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </Banner>
      )}
      <Guesses guesses={guesses} wordLength={answer.length} />
      <GuessInput disabled={status !== "running"} guessHandler={guessHandler} />
    </>
  );
}

export default Game;
