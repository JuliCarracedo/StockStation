import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CompanyPage from './components/CompanyPage/CompanyPage';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ErrorPage from './pages/Error';
import Loading from './pages/Loading';
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
        {error && (<ErrorPage />)}
        {(loading && !error) && <Loading />}
        {(!loading && !error) && (
          <Routes>
            <Route exact path="/" element={<Home />} />
            {companies.map((company) => <Route key={company} exact path={`/${company}`} element={<CompanyPage title={company} />} />)}
          </Routes>
        ) }
      </BrowserRouter>
    </div>
  );
}

export default App;
