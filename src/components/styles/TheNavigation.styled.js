import styled from 'styled-components'

export const TheNavigation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;

    position: static;
    width: 234px;
    height: 56px;
    left: 0px;
    bottom: 0px;
    margin: auto 0;
    ul{
        display:flex;
        flex-direction:row;
        list-style:none;
        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0px 0px;
        li{         
            padding:10px;
            a{
                font-weight:semi-bold;
                font-size: 16px;
                line-height: 20px;
                align:center;
            }
        }
    }
` 