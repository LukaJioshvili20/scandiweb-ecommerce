import React, { Component } from "react"
import { TheActions } from "../styles/TheActions.styled"

export class Actions extends Component{
    render(){
        return(
            <TheActions>          
                <div>
                    <span className="currency">$
                        <img src={require('../../assets/Arrow.png')} alt="" />
                    </span>
                </div>
                <div>
                    <img src={require('../../assets/CartEmpty.png')} alt="Cart" />
                </div>
            </TheActions>
        )
    }
}