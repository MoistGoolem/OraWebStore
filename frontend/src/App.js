// @ts-nocheck
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { logout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';

function App() {

    const cart = useSelector( state => state.cart);
    const { cartItems } = cart;
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();
    
    const logoutHandler = () => {
        dispatch(logout());
    }

    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <Link className="brand" to="/">Ora</Link>
                    </div>

                    <div>
                        <Link to="/cart">
                            Cart
                            {cartItems.length > 0 && (
                                <span className="badge">{cartItems.length}</span>
                            )}
                        </Link>
                        {
                            userInfo ? (
                                <div className="dropdown">
                                    <Link to="#">
                                        {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                                    </Link>
                                    <ul className="dropdown-content">
                                        <Link to="#logout" onClick={logoutHandler}>
                                            Sign Out
                                        </Link>
                                    </ul>
                                </div>
                            ) : (
                                <Link to="/login">Sign In</Link>
                            )
                        }
                    </div>
                </header>

                <main>
                    <Route path="/cart/:id?" component={CartScreen}></Route>
                    <Route path="/product/:id" component={ProductScreen}></Route>
                    <Route path="/login" component={LoginScreen}></Route>
                    <Route path="/register" component={RegisterScreen}></Route>
                    <Route path="/shipping" component={ShippingAddressScreen}></Route>
                    <Route path="/payment" component={PaymentMethodScreen}></Route>
                    <Route path="/placeorder" component={PlaceOrderScreen}></Route>
                    <Route path="/" component={HomeScreen} exact></Route>
                </main>

                <footer className="row center">
                    All rights reserved
                </footer>
            </div>
        </BrowserRouter>
    );
}
export default App;
