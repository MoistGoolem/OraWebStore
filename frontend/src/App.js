function App() {
  return (
    <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="index.html">Ora</a>
                </div>

                <div>
                    <a href="cart.html">Cart</a>
                    <a href="login.html">Sign In</a>
                </div>
            </header>

            <main>
                <div className="row center">
                    <div className="card">
                        <a href="product.html">
                            <img className="medium" src="./images/products/p1.jpg" alt="product"></img>
                        </a>
                        <div className="card-body">
                            <a href="product.html">
                                <h2>Bonsai Tree</h2>
                            </a>
                            <div className="rating">
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star"></i></span>
                                <span><i className="fa fa-star-half-o"></i></span>
                                <span><i className="fa fa-star-o"></i></span>

                            </div>
                            <div className="price">
                                $120
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <footer className="row center">
                All rights reserved
            </footer>
        </div>
  );
}
export default App;
