import React from "react";
import bird from "./svg/bird.svg";
import dog from "./svg/dog.svg";
import cow from "./svg/cow.svg";
import cat from "./svg/cat.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgMap = {
  bird,
  dog,
  cow,
  cat,
  gator,
  horse
};

export default function AnimalShow({ type }) {
  return (
    <div>
      <img src={svgMap[type]} alt="animal" />
    </div>
  );
}
