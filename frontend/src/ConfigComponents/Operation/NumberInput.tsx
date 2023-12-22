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
    const parsed = parseInt(event.target.value, 10);
    console.log("onChange number input, parsed = ", parsed);
    if (!isNaN(parsed)) {
      const sanitizes = sanitizeInput(parsed);
      onInput(value, sanitizes);
      setInputValue(sanitizes.toString());
    } else {
      setInputValue(event.target.value);
    }
  };

  return (
    <TextField
      id="outlined-number"
      label="Number"
      type="number"
      onChange={handleInputChange}
      onBlur={() => {
        setInputValue(value.toString());
      }}
      InputLabelProps={{
        shrink: true,
      }}
      value={inputValue}
    />
  );
};
