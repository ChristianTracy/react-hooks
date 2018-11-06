import React, { useEffect } from "react";

const UsingEffect = () => {
    useEffect(()=>{
        console.log("component was mounted");
        return () => console.log("unmounted!");
    });
  return (
    <div>
        using effect
    </div>
  );
};

export default UsingEffect;