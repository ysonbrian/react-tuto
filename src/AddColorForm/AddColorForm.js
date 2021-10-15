import React, { useRef, useState } from 'react';
import { useInput } from '../CustomHooks/hooks';
import { useColors } from '../CustomHooks/hooks';
const AddColorForm = ({ onNewColor = (f) => f }) => {
  // const txtTitle = useRef();
  // const hexColor = useRef();
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');
  const { addColor } = useColors();
  const submit = (e) => {
    e.preventDefault();
    // const title = txtTitle.current.value;
    // const color = hexColor.current.value;
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
    // txtTitle.current.value = '';
    // hexColor.current.value = '';
  };

  return (
    <form onSubmit={submit}>
      {/* <input ref={txtTitle} type="text" placeholder="color title..." required />
      <input ref={hexColor} type="color" required /> */}
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        requried
      />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
};

export default AddColorForm;
