import React from "react";

const Ad = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div>{item.img}</div>
      ))}
    </div>
  );
};

export default Ad;
