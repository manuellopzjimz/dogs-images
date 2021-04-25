import React from 'react';
import styled from 'styled-components';

type VisibilityProps = {
    isVisible: boolean
};

type ItemSelectionProps = {
    isSelected: boolean;
};

export const Container = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
`;

export const Label = styled.div`
    font-size: 16px;
    font-family: Arial;
    border: 1px solid #bbb;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    word-wrap: break-word;

    &:after {
        font-family: FontAwesome;
        content: ${(props: VisibilityProps & React.HTMLProps<HTMLDivElement>) => props.isVisible ? "'\f062'" : "'\f063'" };
        margin-left: 20px;
    }
`;

export const ListItem = styled.ul`
    list-style-type: none;
    border: 1px solid #bbb;
    border-radius: 5px;
    padding: 0px;
    height: 200px;
    overflow-y: auto;
    margin-top: 50px;
    position: absolute;
    z-index: 1;
    width: 350px;
    background-color: white;
    box-shadow: 0px 0px 8px rgba(0,0,0,.6);
`;

export const Item = styled.li`
    padding: 10px 0px;
    text-align: center;
    font-size: 14px;
    font-family: Arial;
    cursor: pointer;
    border-bottom: 1px solid #bbb;

    background-color: ${(props: ItemSelectionProps & React.HTMLProps<HTMLLIElement>) => props.isSelected ? '#aaa' : 'white'};

    &:hover {
        background-color: #bbb;
    }

    &:nth-last-child(1) {
        border-bottom: none;
    }
`;