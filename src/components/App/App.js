import React from 'react';
import './App.css';
import ProductContainer from "../ProductContainer/ProductContainer";
import {SERVER_DOMAIN_URL} from '../../connectionURL';
import Footer from'../Footer/Footer';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            cartProducts: [],
            modalStatus: false
        }
        //this.addToCartHandler = this.addToCartHandler.bind(this);
        this.incDecHandler = this.incDecHandler.bind(this);
        this.modalHandler = this.modalHandler.bind(this);
    }
/*   if seperate add to cart handler needed.
    addToCartHandler(id) {
        if (this.state.products.length !== 0) {
            let prevProd = [...this.state.products]
            prevProd[id] = {...this.state.products[id]}
            this.setState({
                ...this.state,
                products: [...prevProd],
            });
        }
    }
 */

    modalHandler(){
        this.setState(prevState=>{
            return {
                ...prevState,
                modalStatus:!prevState.modalStatus
            }
        })
    }

    incDecHandler(id, incDec) {

        if (this.state.products.length !== 0) {
            let prevProd = [...this.state.products]
            if (incDec === 1) {
                prevProd[id].Quantity += 1
            } else {
                if (prevProd[id].Quantity !== 0) {
                    prevProd[id].Quantity -= 1
                }
            }
            //console.log(this.state)
            //console.log(this.state.cartProducts)
            this.setState({
                ...this.state,
                products: [...prevProd]
            });
        }

    }

    componentDidMount() {
        ////////////////////////////////////Fetching Data///////////////////////////////////////////
        const fetchPromise = fetch(SERVER_DOMAIN_URL);
        fetchPromise.then(response => {
            return response.json();
        }).then(data => {
            this.setState({
                products: JSON.parse(JSON.stringify(data)),
                cartProducts: JSON.parse(JSON.stringify(data))
            });
        });
    }

    render() {
        //console.log("inside product container component")
        const productItem = this.state.products.map(item => <ProductContainer key={item._id} product={item}
                                                                              incDecHandler={this.incDecHandler}/>);
        return (
            <React.Fragment>

                <main>
                    <div className={"product-container"}>
                        {productItem === [] ? console.log("Data Fetching") : productItem}
                    </div>
                    <Footer products={this.state.products} modalHandler={this.modalHandler} modalStatus={this.state.modalStatus}/>
                </main>
            </React.Fragment>
        )
    }
}

export default App;
