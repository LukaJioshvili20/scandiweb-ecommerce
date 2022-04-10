import React, { Component } from "react";
// Components

// Styles
import { Card } from "../styles/Card.styled"

export class ProductCard extends Component{
    render(){
        return(
          <Card>
              <div>
                  <img src={require('../../assets/product.png')} alt="" />
              </div>
              <div>
                  <h3>Apollo Running Short</h3>
                  <h3>$50.00</h3>
              </div>
          </Card>
        )
    }
}

export default ProductCard;