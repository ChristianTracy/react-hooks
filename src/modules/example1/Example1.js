import React from "react";
import UsingClass from "./UsingClass";
import UsingHooks from "./UsingHooks";
import Emojify from "react-emojione";

const Example1 = () => (
  <div>
    <h2>
      with class
      <Emojify>
        <span>:tophat:</span>
      </Emojify>
    </h2>
    <UsingClass />
    <hr/>
    <h2>
      with hooks
      <Emojify>
        <span>:billed_cap:</span>
      </Emojify>
    </h2>
    <UsingHooks />
  </div>
);

export default Example1;
