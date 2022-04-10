import React, { Component } from "react";
import { TheNavigation } from '../styles/TheNavigation.styled'
import { Container } from '../styles/Container.styled'

export class Navigation extends Component{
    render(){
        return(
            <React.Fragment>
                <TheNavigation>
                    <Container>
                    <ul>
                        <li className="active active-border">
                            <a href="/#">Women</a>
                        </li>
                        <li>
                            <a href="/#">Men</a>
                        </li>
                        <li>
                            <a href="/#">Kids</a>
                        </li>
                    </ul>     
                    </Container>       
                </TheNavigation>
            </React.Fragment>
        )
    }
}

export default Navigation;