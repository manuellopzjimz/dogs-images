import React from 'react';
import styled, {css, keyframes} from 'styled-components';

type VisibilityProps = {
    isVisible: boolean;
}

const appearAnimation = keyframes`
  from {
    transform: translateY(50px);
  }

  to {
    transform: translateY(0px);
  }
`;

export const Container = styled.div`
    border: 1px solid red;
    border-radius: 5px;
    padding: 10px;
    background-color: white;
    position: absolute;
    z-index: 1;
    bottom: 20px;
    animation: ${(props: VisibilityProps & React.HTMLProps<HTMLDivElement>) => props.isVisible ? css`${appearAnimation} 0.1s linear` : 'none'};
`;