import React, { Component } from "react";
import { Switch, Route, Link, Router } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Cart from "./pages/cart/Cart"
import NotFound from "./pages/notFound";
import { PrivateRoute } from "./components/privateRoute";
import history from "./utils/helpers/history";


import data from "./Data";
import Context from "./Context";


export default class RouterComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          cart: {},
          products: []
        };
  
        this.routerRef = React.createRef();
      }
    
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
        alert("აი მოგიტანთ სახლში ახლავე")
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
        products = products ? JSON.parse(products) : data.initProducts;
        cart = cart ? JSON.parse(cart) : {};
        this.setState({ products, cart });
      }
    
      render() {
        return (
          <Context.Provider
            value={{
              ...this.state,
              removeFromCart: this.removeFromCart,
              addToCart: this.addToCart,
              clearCart: this.clearCart,
              checkout: this.checkout
            }}
          >
            <Router history={history}>
              <Switch>
                <PrivateRoute path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/cart" exact component={Cart} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Router>
      </Context.Provider>
  );
};
}