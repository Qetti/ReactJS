import React, { useState, Component} from 'react';
import { Switch, Route, BrowserRouter as Router, NavLink, Redirect, useHistory } from 'react-router-dom';
import './App.css';
import Home from './containers/home';
import Users from './containers/users';
import UserDetail from './containers/user-detail';
import Products from './containers/products';
import AddProduct from './containers/addproduct/index'
import Login from './containers/login';
import Register from './containers/register';
import NotFound from './containers/notfound';
import Cart from './containers/cart'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import data from "./Data";
import Context from "./Context";


export const PublicLayout = (props) => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    
  </Switch>
);

export const PrivateLayout = () => {
  const history = useHistory();
  const [expanded, setExpandedStatus] = useState(false);

  const logoutUser = () => {
    localStorage.removeItem("USER_TOKEN");
    history.replace('/');
  }

  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        expanded={expanded}
        onToggle={() => {
          setExpandedStatus(!expanded)
        }}
      >
        <Nav.Link as={NavLink} activeClassName="active" exact to="/" style={{color: '#ffd1d1', lineHeight: '45px', fontWeight: '700', fontSize: '25px'}}onClick={() => setExpandedStatus(false)}>Qetti Final</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} activeClassName="active" exact to="/" onClick={() => setExpandedStatus(false)}>მთავარი</Nav.Link>
            <Nav.Link as={NavLink} activeClassName="active" to="/users" onClick={() => setExpandedStatus(false)}>მომხმარებლები</Nav.Link>
            <Nav.Link as={NavLink} activeClassName="active" to="/products" onClick={() => setExpandedStatus(false)}>პროდუქტები</Nav.Link>
            <Nav.Link as={NavLink} activeClassName="active" to="/cart" onClick={() => setExpandedStatus(false)}>კალათა</Nav.Link>
            <Nav.Link as={NavLink} activeClassName="active" to="/addproduct" onClick={() => setExpandedStatus(false)}>პროდუქტის დამატება</Nav.Link>
          </Nav>
          <Button variant="outline-success" className="my-2" onClick={logoutUser}>გამოსვლა</Button>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <PrivateRoute path="/">
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/user-detail" component={UserDetail} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/addproduct" component={AddProduct} />
          {/* <Route component={NotFound} /> */}
        </PrivateRoute>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("USER_TOKEN") !== null ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  )
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      cart: {},
      products: []
    };
  }
    addProduct = (product, callback) => {
      let products = this.state.products.slice();
      products.push(product);
      localStorage.setItem("products", JSON.stringify(products));
      this.setState({ products }, () => callback && callback());
    };
  
    addToCart = cartItem => {
      let cart = this.state.cart;
      if (cart[cartItem.id]) {
        cart[cartItem.id].amount += cartItem.amount;
      } else {
        cart[cartItem.id] = cartItem;
      }
      if (cart[cartItem.id].amount > cart[cartItem.id].product.stock) {
        cart[cartItem.id].amount = cart[cartItem.id].product.stock;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      this.setState({ cart });
    };
  
    checkout = () => {
      alert('აი მოგიტანთ სახლში ზან მალე')
      const cart = this.state.cart;
      const products = this.state.products.map(p => {
        if (cart[p.name]) {
          p.stock = p.stock - cart[p.name].amount;
        }
        return p;
      });
      this.setState({ products });
      this.clearCart();
    };
  
    removeFromCart = cartItemId => {
      let cart = this.state.cart;
      delete cart[cartItemId];
      localStorage.setItem("cart", JSON.stringify(cart));
      this.setState({ cart });
    };
  
    clearCart = () => {
      let cart = {};
      localStorage.setItem("cart", JSON.stringify(cart));
      this.setState({ cart });
    };
  
    componentDidMount() {
      let products = localStorage.getItem("products");
      let cart = localStorage.getItem("cart");
      let user = localStorage.getItem("user");
      products = products ? JSON.parse(products) : data.initProducts;
      cart = cart ? JSON.parse(cart) : {};
      user = user ? JSON.parse(user) : null;
      this.setState({ products, user, cart });
    };
    
    render() {
      return (
        <Context.Provider
            value={{
              ...this.state,
              removeFromCart: this.removeFromCart,
              addToCart: this.addToCart,
              login: this.login,
              addProduct: this.addProduct,
              clearCart: this.clearCart,
              checkout: this.checkout
            }}
          >
          <Router>
            <Switch>
              <Route exact path="/login" component={PublicLayout} />
              <Route path="/" component={PrivateLayout} />
            </Switch>
          </Router>
        </Context.Provider>

      );
    }
}

