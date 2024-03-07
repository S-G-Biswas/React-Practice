import React, { useRef, useEffect } from 'react';

export default function FocusInput(){
  // Declare a ref object
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus on the input element when the component mounts
    inputRef.current.focus();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <input ref={inputRef} type="text" placeholder="Focus me" />
  );
};
