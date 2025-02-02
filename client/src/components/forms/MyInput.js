import React from "react";
import styled from "styled-components";

const MyInput = (props) => {
  return (
    <Input
      id={props.id}
      type={props.inputType}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default MyInput;

const Input = styled.input`
  display: inline-block;
    outline: none;
    cursor: pointer;
    font-weight: 500;
    border-radius: 3px;
    padding: 0 16px;
    border-radius 4px;
    color: #fff;
    background: #0C7C59;
    line-height: 1.15;
    font-size: 14px;
    height: 36px;
    text-decoration: none;
    min-width: 100px;
    max-width: 200px;
    border: none;
    text-align: center;
    :hover {
        background: rgb(98, 0, 238);
    }
`;
