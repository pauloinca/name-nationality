import styled from "styled-components";

export const Button = styled.button`
    background-color: black;
    float: left;
    color: white;
    border-radius: 0 5px 5px 0;
    border: 1px solid;
    border-left: none;
    font-size: 20px;
    height: 3rem;
    width: 3rem;
    text-decoration: none;
    text-align: center;
    padding: 0.35em 0.2em;
    cursor: pointer;

    &:hover {
        background: #444;
        box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
        transition: background-color 1s;
    }
`;
