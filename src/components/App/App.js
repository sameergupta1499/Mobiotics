import React from 'react';
import './App.css';
import ProductContainer from "../ProductContainer/ProductContainer";

const App = () => (
    <React.Fragment>

            <main className="container-fluid">
                <div className={"row"}>
                    <ProductContainer/>
                </div>
            </main>
    </React.Fragment>
);

/*
const App = () => (
    <React.Fragment>
        <div className="wrapper">
            <Header/>
            <main className="container-fluid">
                <div className={"row"}>
                    <FilterContainer/>
                    <ProductContainer/>
                </div>
            </main>
        </div>
        <Footer/>
    </React.Fragment>
);
*/
export default App;
