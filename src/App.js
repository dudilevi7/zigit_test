import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './routes/Routes';

const App = () => {
  const userData = useSelector(state => state.auth)

  useEffect(() => {
    console.log(userData)
  })
  return (
    <BrowserRouter>
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>

  );
}

export default App;
