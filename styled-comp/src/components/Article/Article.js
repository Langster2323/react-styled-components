import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'

const MainContent = styled.div`
    background-color: ${props => props.theme.lightBlue};
    color: white;
    flex: 1;
    padding: 10px;
`

const Sidebar = styled.div`
    background-color: ${props => props.theme.dimGreen};
    color:  white;
    flex: 0 auto;
    width: 200px;
    padding: 10px;
`

const Wrapper = styled.div`
    display: flex;
    flex-flow: row nowrap
`

const  Article = () => {
    return (
        <Wrapper>
            <MainContent>
                <p>Main Content</p>
                <p>
                    <Button />
                </p>
            </MainContent>
            <Sidebar>
                Sidebar
            </Sidebar>
        </Wrapper>
    )
}

export default Article
