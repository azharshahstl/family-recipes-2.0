import React from "react";

const DifficultyRatingRadioGroup = ({ selectedOption, handleOptionChange }) => {
  return (
    <div>
      <input
        type="radio"
        checked={selectedOption === "easy"}
        onChange={handleOptionChange}
        name="ratings"
        id="level-1"
        value="easy"
      />
      <label htmlFor="level-1">Easy</label>
      <input
        type="radio"
        checked={selectedOption === "moderate"}
        onChange={handleOptionChange}
        name="ratings"
        id="level-1"
        value="moderate"
      />
      <label htmlFor="level-2">Moderate</label>
      <input
        type="radio"
        checked={selectedOption === "difficult"}
        onChange={handleOptionChange}
        name="ratings"
        id="level-1"
        value="difficult"
      />
      <label htmlFor="level-3">Difficult</label>
      <input
        type="radio"
        checked={selectedOption === "master-chef"}
        onChange={handleOptionChange}
        name="ratings"
        id="level-1"
        value="master-chef"
      />
      <label htmlFor="level-4">Master Chef</label>
    </div>
  );
};

export default DifficultyRatingRadioGroup;
