import React, { useRef } from 'react';

function ExampleComponent() {
  // Define a ref object
  const inputRef = useRef(null);

  // Function to focus the input field when called
  const focusInput = () => {
    inputRef.current.focus();
    console.log(inputRef.current.focus);
  };

  return (
    <div>
      {/* Input field with a ref */}
      <input ref={inputRef} type="text" />
      {/* Button to focus the input field */}
      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
}

export default ExampleComponent;
