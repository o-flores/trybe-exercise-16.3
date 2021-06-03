import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Clients from './pages/Clients';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={ Home } />
      <Route exact path='/login' component={ Login } />
      <Route path='/clients' component={ Clients } />
      <Route path='/register' component={ Register } />
    </BrowserRouter>
  );
}

export default App;
