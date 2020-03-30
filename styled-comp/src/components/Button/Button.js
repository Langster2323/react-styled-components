import React from 'react'
import styled from 'styled-components'

const Buttons = styled.button`
    background-color: ${props => props.theme.lightBlue};
    color: white;
    apperance: none;
    border: 1px solid white;
    padding: 0.25em 0.5em;
    transition: background-color .25s, color .25s;

    ${props => {
        switch (props.size) {
            case "small":
            return "font-size: 12px;";
            case "large":
                return "font-size: 20px;";
        }

        return 'font-size: 16px;';
    }}

    &:hover {
        background-color: white;
        color: ${props => props.theme.lightBlue};
        cursor: pointer;
    }
`

const Button = () => {
    return (
        <div>
            <Buttons size="small">Click Me!</Buttons>
            <Buttons>Click Me!</Buttons>
            <Buttons size="large">Click Me!</Buttons>
        </div>
    )
}

export default Button
