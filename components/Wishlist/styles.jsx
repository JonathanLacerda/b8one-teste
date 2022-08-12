import styled from 'styled-components';

export const WhishlistButton = styled.button`
    fill: transparent;
    stroke: #1C1C1C;
    stroke-width: 20;
    cursor: pointer;
    position: relative;
    background: #E9EBEE;
    border: none;
    padding: 15px;
    border-radius: 50%;
    transition: background 0.2s ease;
    position: absolute;
    right: 15px;
    top: 15px;

    svg {
        overflow: visible;
        width: 24px;
        transform: translateY(2px);
    }

    path {
        stroke-dashoffset: 0;
        stroke-dasharray: 1550;
        transform-origin: center;
    }

    &:hover {
        background: #FFCAE0;

        .heart-main path {
            fill: #FFCAE0;
            stroke: #DA4B4F; 
        }
    }


    &.checked {
        background: #DA4B4F;

        &:hover {
            background: #C22539;
        }
    }
`

export const HeartMain = styled.svg`
    overflow: visible;
    width: 10rem;

    &.checked path {
        animation: checked-animation 2s ease-in-out forwards;
    }

    @keyframes checked-animation {
        0% {
            stroke-dashoffset: 0;
            stroke: #FFFFFF;
            fill: #FFCAE0;
        }
        30% {
            stroke-dashoffset: 1550;
            stroke: #FFFFFF;
            fill: #FFCAE0;
        }
        60% {
            stroke-dashoffset: 3100;
            stroke: #FFFFFF;
            fill: #FFCAE0;
            transform: scale(1);
        }
        80% {
            fill: #FFCAE0;
            stroke: #FFFFFF;
            transform: scale(1.1);
        }
        90% {
            transform: scale(1);
            stroke: #FFFFFF;
        }
        100% {
            stroke-dashoffset: 3100;
            fill: #FFFFFF;
            stroke: #FFFFFF;
        }
    }

`

export const HeartBackground = styled.svg`
    overflow: visible;
    width: 10rem;
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
    stroke: none;

    path {
        stroke-dashoffset: 0;
        stroke-dasharray: 1550;
        transform-origin: center;
    }
`