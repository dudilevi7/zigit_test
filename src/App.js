
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import './App.css';
import { LoaderSpinner } from './components/Exceptions/Exceptions';


const App = () => {
  
  const isLoading = useSelector(state => state.auth.isLoading)

  if (isLoading) return <LoaderSpinner />

  return (
    <BrowserRouter>
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>

  );
}

export default App;
