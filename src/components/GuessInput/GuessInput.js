import React from "react";

function GuessInput({ disabled, guessHandler }) {
  const [input, setInput] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        guessHandler(input);
        setInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={disabled}
        value={input}
        onChange={(event) => {
          setInput(event.target.value.toLocaleUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
