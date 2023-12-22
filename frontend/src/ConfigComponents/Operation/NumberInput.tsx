import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";

export type NumberInputProps = {
  value: number;
  onInput: (nOld: number, nNew: number) => void;
  sanitizeInput: (n: number) => number;
};
export const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onInput,
  sanitizeInput,
}) => {
  const [inputValue, setInputValue] = useState<string>(value.toString());
  //update input value state when props change
  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };
  const onBlur = () => {
    const parsed = parseInt(inputValue, 10);
    if (!isNaN(parsed)) {
      const sanitizes = sanitizeInput(parsed);
      onInput(value, sanitizes);
      setInputValue(sanitizes.toString());
    } else {
      //reset to original value => guaranteed to be legal number
      setInputValue(value.toString());
    }
  };
  return (
    <TextField
      id="outlined-number"
      label="Number"
      type="number"
      onBlur={onBlur}
      onChange={handleInputChange}
      InputLabelProps={{
        shrink: true,
      }}
      value={inputValue}
    />
  );
};
