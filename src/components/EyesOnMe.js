import React from "react";

function EyesOnMe() {
  function onBlur() {
    console.log("Hey! Eyes on me!");
  }
  function onFocus() {
    console.log("Good!");
  }
  return (
    <>
      <button onBlur={onBlur} onFocus={onFocus}>
        Eyes on me
      </button>
    </>
  );
}

export default EyesOnMe;
