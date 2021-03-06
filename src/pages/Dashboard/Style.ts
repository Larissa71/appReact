import styled from 'styled-components';
import {shade} from 'polished';
import { isBlock } from 'typescript';


export const Title = styled.h1`
    font-size: 48px;
    color: #315a5e;
    max-width: 450px;
    line-weigth: 56px;

    margin-top: 80px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px; 
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;

    }

    button {
        width: 210px;
        height: 70px;
        backgroud: #3d7b87;
        border-radious: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold:

        transition: backgroud-color 0.2s;

        &:hover{
            backgroud: ${shade(0.2, "#3d7b87")}
        }

    }

`;

export const Repositories = styled.div`

    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;

        transition: transform 0.3s;
        &:hover {
            transform: translate(10px)
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            margin: 0 16px;
            flex: 1;

            strong {
                font-size: 20px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }

        & + a {
            margin-top: 16px;
        }

        svg {

        }
    }
`;

export const Error = styled.span`
    display:block;
    color: #c53030;
    margin-top: 8px;`