import React from "react";

function Banner({ theme, playAgainHandler, children }) {
  return (
    <div className={`${theme} banner`}>
      {children}
      <button type="button" onClick={playAgainHandler}>
        play again
      </button>
    </div>
  );
}

export default Banner;
