import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Clients from './pages/Clients';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={ Home } />
      <Route exact path='/login' component={ Login } />
      <Route path='/clients' component={ Clients } />
    </BrowserRouter>
  );
}

export default App;
