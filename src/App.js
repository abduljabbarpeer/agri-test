import { NavLink, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Routes/Home';
import Page1 from './Routes/Page1';
import Page2 from './Routes/Page2';

function App() {
  return (
    <div className='App'>
      <nav
        style={{
          width: '50%',
          margin: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <NavLink to='/'>Home</NavLink>

        <NavLink to='/page1'>Page 1</NavLink>

        <NavLink to='/page2'>Page 2</NavLink>
      </nav>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/page1'>
          <Page1 />
        </Route>
        <Route path='/page2'>
          <Page2 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
