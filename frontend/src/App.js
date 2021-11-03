import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/loginScreen';
import ProductScreen from './screens/ProductScreen';

function App() {

    // @ts-ignore
    const cart = useSelector( state => state.cart);
    const { cartItems } = cart;

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
                        <Link to="/login">Sign In</Link>
                    </div>
                </header>

                <main>
                    <Route path="/" component={HomeScreen} exact></Route>
                    <Route path="/product/:id" component={ProductScreen}></Route>
                    <Route path="/cart/:id?" component={CartScreen}></Route>
                    <Route path="/login" component={LoginScreen}></Route>
                </main>

                <footer className="row center">
                    All rights reserved
                </footer>
            </div>
        </BrowserRouter>
    );
}
export default App;
