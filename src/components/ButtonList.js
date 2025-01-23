import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Sports",
  "Swimming",
  "Badminton",
  "Cooking",
  "Technology",
  "News",
  'Table Tenis',
];

const ButtonList = () => {
  return (
    <div className="flex scroll-smooth focus:scroll-auto">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
