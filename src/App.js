import Header from './components/header/Header'
import Home from './components/Home/Home'
import {Switch, Route} from 'react-router-dom'
import Cart from './components/cart/Cart'
function App() {
  return (
    <>
    
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
      </Switch>

    </>
  );
}

export default App;
