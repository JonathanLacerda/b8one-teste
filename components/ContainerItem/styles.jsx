import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2% 6%;
    transition: all 0.3s ease;
    box-shadow: 0px 0 0 transparent;

    @media only screen and (min-width: 600px) {
        flex-direction: row;
        height: 100vh;
    }
`;
