import './App.css';
import Login from '../src/components/Login/Login/Login'
import Home from '../src/components/Home/Home/Home'
import Shop from '../src/components/Shop/Shop/Shop';
import PrivateRoute from '../src/components/Login/PrivateRoute/PrivateRoute'
import NotFound from './NotFound'
import { createContext, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddProduct from './components/AddProduct/AddProduct';
import Shipment from './components/Shop/Shipment/Shipment';
import FancyCard from './components/Shop/Shipment/ProcessPayment/FancyCard/FancyCard';
import Appointment from './components/Appointment/Appointment/Apoointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddArtist from './components/AddArtist/AddArtist';
import AllClients from './components/AllClients/AllClients';
import Subscribe from './components/Home/Subscribe/Subscribe';
import BLogs from './components/Home/Blogs/Blogs';
import LogOut from './components/Login/Login/LogOut';
export const UserContext = createContext();
export const CartContext = createContext();

function App() {
 const [loggedInUser, setLoggedInUser] = useState({});
 const [cartItems,setCartItems] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <CartContext.Provider value={[cartItems,setCartItems]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
            <Route exact path="/appointment">
              <Appointment />
            </Route>
            <Route exact path="/fancy">
              <FancyCard />
            </Route>
            <Route exact path="/contact">
              <Subscribe></Subscribe>
            </Route>
            <Route exact path="/blogs">
              <BLogs />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute exact path="/shipment">
              <Shipment />
            </PrivateRoute>
            <PrivateRoute exact path="/addproduct">
              <AddProduct />
            </PrivateRoute>
            <PrivateRoute exact path="/addartist">
              <AddArtist />
            </PrivateRoute>
            <PrivateRoute path="/allclients">
              <AllClients />
            </PrivateRoute>
            <Route exact path="/logout">
              <LogOut/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
