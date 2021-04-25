import React from 'react';
import styled from 'styled-components';

type AvailabilityProp = {
    isDisable?: boolean;
};

export const Button = styled.input.attrs({type: 'submit'})`
    width: 300px;
    height: 64px;
    background-color: ${(props: React.HTMLProps<HTMLInputElement> & AvailabilityProp) => props.isDisable ? '#aaa': 'cyan'};
    cursor: ${(props: React.HTMLProps<HTMLInputElement> & AvailabilityProp) => props.isDisable ? 'not-allowed' : 'pointer'};
    border: 1px solid #bbb;
    border-radius: 50px;
    font-weight: bold;
    font-size: 18px;
`;