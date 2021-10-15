import React, { useContext } from 'react';
import { ColorContext } from '../';
import Color from './Color';
import { useColors } from '../CustomHooks/hooks.js';

const ColorList = () => {
  const { colors } = useColors();
  if (!colors.length) return <div>No Colors Listed</div>;
  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
};

export default ColorList;
