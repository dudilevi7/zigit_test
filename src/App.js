import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { LOGIN_API } from './constants/api/api';
import LoginPage from './pages/LoginPage/LoginPage';
import fetchData from './services/fetchData';

const App = () => {
  const userData = useSelector(state=>state.auth)

  useEffect(()=>{
    console.log(userData)
  })
  return (
    <div className="App">
        <LoginPage/>
    </div>
  );
}

export default App;
