import React from "react";

class ProductContainer extends React.Component {
    constructor(props) {
        super(props)
        this.onUpdateProducts = this.onUpdateProducts.bind(this)
    }

    componentDidMount() {
        ////////////////////////////////////Fetching Data///////////////////////////////////////////
        const fetchPromise = fetch("http://127.0.0.1:5050/products");
        fetchPromise.then(response => {
            return response.json();
        }).then(people => {
            console.log(people[0]["Brand_name"]);
        });
    }

    onUpdateProducts() {

    }

    componentDidUpdate(prevProps) {

    }

    render() {
        //console.log("inside product container component")
        return (
            <>
                <p>this is a para</p>
            </>
        )
    }
}

export default ProductContainer;