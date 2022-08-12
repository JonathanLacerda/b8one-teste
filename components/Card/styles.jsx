import styled from 'styled-components';

export const Title = styled.h2`
    a {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        margin-top: 25px;
        text-decoration: none;
        color: #1C1C1C;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const Item = styled.div`
    background: #FFFFFF;
    border-radius: 8px;
    max-width: 245px;
    margin: 1rem;
    padding: 32px;
    position: relative;
    transition: all 0.3s ease;

    @media only screen and (min-width: 600px) {
    margin: 3rem;
    }

    &:hover {
        box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
    }
`

export const Prices = styled.div`

`

export const ListPrice = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.005em;
    text-decoration-line: line-through;
    color: #B5B5B6;
    margin: 25px 0 5px 0;
`

export const BestPrice = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.005em;
    color: #DA4B4F;
    margin: 0;      
`

export const Installment = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.005em;
    color: #848587;
    margin-top: 5px;

    strong {
        color: #1C1C1C;
    }

`
