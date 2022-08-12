import styled from 'styled-components';

export const BuyButton = styled.button`
    align-items: center;
    padding: 12px 24px;
    background: #40B25C;
    border-radius: 5px;
    border: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.005em;
    text-transform: uppercase;
    color: #FFFFFF;
    width: 100%;
    margin-top: 35px;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;

    &:hover {
        background: #1C6C3E;
    }

    &.checked {
        svg {
            display: block;
        }
    }
`

export const Svg = styled.svg`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #fff;
    stroke-miterlimit: 10;
    box-shadow: inset 0px 0px 0px #40B25C;
    position: absolute;
    left: 15px;
    top: 0px;
    display: none;
`

export const Path = styled.path`
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;

    @keyframes stroke{
		100%{ stroke-dashoffset: 0 }
	}   
`