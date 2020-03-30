import React from 'react'
import styled from "styled-components";
import Article from '../Article/Article';

const Heading = styled.h1`
    color: ${props => props.theme.dimGreen};
    text-align: center;
`

const Home = () => {
    return (
        <div>
            <Heading>Hello World</Heading>
            <Article />
        </div>
    )
}

export default Home
