import React, { Component } from "react";
// Components

// Styles
import { TheLogo } from "../styles/TheLogo.styled"

export class Logo extends Component{
    render(){
        return(
            <TheLogo>
                <img src={require('../../assets/Logo.png')} alt="Logo" />
            </TheLogo>
        )
    }
}

export default Logo;