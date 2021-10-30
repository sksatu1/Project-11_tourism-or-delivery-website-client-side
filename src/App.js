import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddPlaces from './components/AddPlaces/AddPlaces';
import Footer from './components/Footer/Footer';
import Headers from './components/Headers/Headers';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>

        <BrowserRouter>
          <Headers></Headers>
          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/myOrders'>
              <MyOrders></MyOrders>
            </Route>

            <PrivateRoute path='/orderReview/:id'>
              <OrderReview></OrderReview>
            </PrivateRoute>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>


      </AuthProvider>
    </div>
  );
}

export default App;
