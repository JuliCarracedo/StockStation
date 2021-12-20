/* eslint-disable no-nested-ternary */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CompanyPage from './components/CompanyPage';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import requestData, { companies } from './redux/stocks/async';

function App() {
  const { loading, error } = useSelector((store) => store.stocks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestData());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {error ? (<div>API request quota reached</div>) : (loading ? <div> Loading</div> : (
          <Routes>
            <Route exact path="/" element={<Home />} />
            {companies.map((company) => <Route key={company} exact path={`/${company}`} element={<CompanyPage title={company} />} />)}
          </Routes>
        )) }
      </BrowserRouter>
    </div>
  );
}

export default App;
