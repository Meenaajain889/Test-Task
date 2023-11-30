import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import FirstBlock from './components/firstBlock';
import SecondBlock from './components/secondBlock';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
       <nav>
          <ul>
            <li>
              <Link to="/">First Block</Link>
            </li>
            <li>
              <Link to="/second">Second Block</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<FirstBlock />} />
          <Route path="/second" element={<SecondBlock />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
