import React from "react";

const BlurCircle = ({
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
}) => {
  return (
    <div
      className="absolute -z-50 aspect-square w-56 rounded-full bg-primary/30 blur-3xl"
      style={{ top, left, right, bottom }}
    ></div>
  );
};

export default BlurCircle;
