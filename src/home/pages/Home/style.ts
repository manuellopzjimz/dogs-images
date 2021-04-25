import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 110px;
    background-color: ${props => props.theme.backgroundColor};

    & * {
        font-family: Roboto;
    }
`;

export const Logo = styled.img.attrs({width: 48, height: 48})``;

export const ChangeTheme = styled.div`
    cursor: pointer;
`;