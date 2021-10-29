import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
        <div className="grid-container">
            <header className="row">
                <div>
                    <Link className="brand" to="/">Ora</Link>
                </div>

                <div>
                    <Link to="/cart">Cart</Link>
                    <Link to="/login">Sign In</Link>
                </div>
            </header>

            <main>
                <Route path="/" component={HomeScreen} exact></Route>
                <Route path="/product/:id" component={ProductScreen}></Route>
                <Route path="/cart/:id?" component={CartScreen}></Route>
            </main>

            <footer className="row center">
                All rights reserved
            </footer>
        </div>
    </BrowserRouter>
  );
}
export default App;
