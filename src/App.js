import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={ Home } />
      <Route exact path='/login' component={ Login } />
    </BrowserRouter>
  );
}

export default App;
