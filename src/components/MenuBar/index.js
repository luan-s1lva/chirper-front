import React from "react";

const MenuBar = ({ data }) => {
  return (
    <div>
      <nav>
        <a href="/">INÍCIO</a>
        {data.map((item) => (
          <a href={item.url}>{item.name}</a>
        ))}
      </nav>
    </div>
  );
};

export default MenuBar;
