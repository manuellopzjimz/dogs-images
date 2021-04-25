import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 800px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`; 