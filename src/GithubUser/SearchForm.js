import React, { useState } from 'react';

const SearchForm = ({ value, onSearch }) => {
  const [name, setName] = useState();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    onSearch(name);
    setName('');
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SearchForm;
