import React from "react";

const MenuBar = ({ data }) => {
  return (
    <div>
      <nav>
        <a href="/">INÍCIO</a>
        {data.map((item, index) => (
          <a key={index} href={item.value}>{item.key}</a>
          // alert(JSON.stringify(item))
        ))}
      </nav>
    </div>
  );
};

export default MenuBar;
