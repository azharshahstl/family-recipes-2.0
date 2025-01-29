import React, { useState } from "react";
import Legend from "../legend/Legend";
import DifficultyRatingRadioGroup from "./DifficultyRatingRadioGroup";

const DifficultyRatingScore = () => {
  const [selectedOption, setSelectedOption] = useState(undefined);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <fieldset>
      <Legend title="Choose the difficulty level" />
      <DifficultyRatingRadioGroup
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
    </fieldset>
  );
};

export default DifficultyRatingScore;
