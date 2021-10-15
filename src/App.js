import React, { useState } from 'react';
import ColorList from './ColorList/ColorList';
import AddColorForm from './AddColorForm/AddColorForm';
import GithubUser from './GithubUser/GithubUser';
import VirtualizedList from './VirtualizedList/VirtualizedList';
import SearchForm from './GithubUser/SearchForm';

const App = () => {
  const [login, setLogin] = useState('moontahoe');
  return (
    <div>
      {/* <AddColorForm />
      <ColorList /> */}
      <SearchForm value={login} onSearch={setLogin} />
      <GithubUser login={login} />
      {/* <VirtualizedList /> */}
    </div>
  );
};

export default App;
