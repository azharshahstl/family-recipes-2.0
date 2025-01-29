import React, { useState } from "react";
import Legend from "../legend/Legend.tsx";
import DifficultyRatingRadioGroup from "./DifficultyRatingRadioGroup.tsx";

const DifficultyRatingScore = () => {
  const [selectedOption, setSelectedOption] = useState(undefined);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <Legend title="Choose the difficulty level" />
      <DifficultyRatingRadioGroup
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
    </>
  );
};

export default DifficultyRatingScore;
