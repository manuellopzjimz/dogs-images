import styled from 'styled-components';

export const Header = styled.header`
    position: fixed;
    top: 0px;
    width: 100%;
    height: 64px;
    border-bottom: 3px solid black;
    background-color: ${props => props.theme.backgroundColor};
    display: flex; 
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    box-shadow: 0px 0px 8px rgba(0,0,0,.6);
`;