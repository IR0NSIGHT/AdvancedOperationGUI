import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";

export type NumberInputProps = {
  value: number;
  onInput: (nOld: number, nNew: number) => void;
  isAllowed: (n: number) => boolean;
};
export const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onInput,
  isAllowed,
}) => {
  const [inputValue, setInputValue] = useState<number>(value);
  //update input value state when props change
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const parsedNumber = parseInt(value, 10);
    if (!isNaN(parsedNumber) && isAllowed(parsedNumber)) {
      onInput(inputValue, parsedNumber);
      setInputValue(parsedNumber);
    }
  };

  return (
    <TextField
      id="outlined-number"
      label="Number"
      type="number"
      onChange={handleInputChange}
      InputLabelProps={{
        shrink: true,
      }}
      value={inputValue}
    />
  );
};
