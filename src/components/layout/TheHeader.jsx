import React, { Component } from "react";
// Components
import { Navigation} from './TheNavigation'
import { Logo } from "./TheLogo"
import { Actions } from "./TheActions"
// Styles
import { TheHeader } from '../styles/TheHeader.styled'
import { Container } from "../styles/Container.styled";

export class NavBar extends Component{
    render(){
        return(
                <Container>
            <TheHeader>
                <Navigation alt="hell"/>   
                <Logo/>       
                <Actions/>
            </TheHeader>
                </Container>
        )
    }
}

export default NavBar;