import React from "react";

const Post = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <div>
          <h4>{item.title}</h4>
          <div>{item.img}</div>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Post;
