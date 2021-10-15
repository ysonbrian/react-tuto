import React, { createContext, useState, useContext } from 'react';
import colorData from '../data/color-data.json';
import { v4 } from 'uuid';

const ColorContext = createContext();

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
};

export const useColors = () => useContext(ColorContext);
