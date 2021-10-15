import React, { createContext } from 'react';
import { ColorProvider } from './ColorList/color-hooks';
import colors from './data/color-data';
import { render } from 'react-dom';
import App from './App';

// createContext로 만든건 export로 해야 다른 컴포넌트에서 사용가능
export const ColorContext = createContext();

// React Context
// Provider 를 App으로 감싸고 사용하는 Context는 Consumer를 사용
render(
  // <ColorContext.Provider value={{ colors }}>
  //   <App />
  // </ColorContext.Provider>,
  <App />,
  document.getElementById('root')
);
