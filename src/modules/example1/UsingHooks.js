import React, { useState } from "react";

const UsingHooks = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <button className="flat-button" onClick={() => setValue(value + 1)}>
        + 1
      </button>
      <span className="result-value">{value}</span>
      <pre>
            {JSON.stringify({ value }, null, 2)}
        </pre>
    </div>
  );
};

export default UsingHooks;
