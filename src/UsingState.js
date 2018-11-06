import React, { useState, useEffect } from "react";

const UsingState = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${value} times`;
  });
  return (
    <div>
      value: {value}
      <button onClick={() => setValue(value + 1)}>Add 1</button>
    </div>
  );
};

export default UsingState;