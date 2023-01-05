import React from "react";
import AnimalShow from "./AnimalShow";
import { useState } from "react";
const App = () => {
  const [animals, setAnimals] = useState([]);

  const getRandomAnimal = () => {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

    return animals[Math.floor(Math.random() * animals.length)];
  };

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderedAnimals}</div>
    </div>
  );
};

export default App;
