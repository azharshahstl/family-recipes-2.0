import React from "react";
import Legend from "../legend/Legend.tsx";
import DifficultyRatingRadioGroup from "./DifficultyRatingRadioGroup.tsx";

const DifficultyRatingScore = ({ rating, setRating }) => {
  const handleOptionChange = (e) => {
    setRating(e.target.value);
  };

  return (
    <>
      <Legend title="Choose the difficulty level" />
      <DifficultyRatingRadioGroup
        selectedOption={rating}
        handleOptionChange={handleOptionChange}
      />
    </>
  );
};

export default DifficultyRatingScore;
