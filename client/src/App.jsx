import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import FirstBlock from './components/firstBlock';
import SecondBlock from './components/secondBlock';
import { Provider } from 'react-redux';
import store from './redux/store';
import "./App.css"

const App = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === '/') {
      setActive(0);
    } else if (currentPath === '/second') {
      setActive(1);
    }
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="test-box">
          <nav className='nav'>
            <ul>
            <li className={active === 0 ? 'active' : ''} onClick={() => setActive(0)}>
                <Link to="/">First Block</Link>
              </li>
              <li className={active === 1 ? 'active' : ''} onClick={() => setActive(1)}>
                <Link to="/second">Second Block</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/" element={<FirstBlock />} />
            <Route exact path="/second" element={<SecondBlock />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
