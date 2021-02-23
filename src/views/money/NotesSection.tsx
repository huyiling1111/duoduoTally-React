import styled from "styled-components";
import React, {useRef, useState} from "react";
import {Input} from "../../components/Input";

const Swapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;
type Props = {
    value: string;
    onChange: (value: string) => void;
}
const NotesSection: React.FC<Props> = (props) => {
    const {value,onChange}=props
    console.log(value,'备注')


    return (
        <Swapper>
            <Input label="备注"  note={value}  onChange={onChange}></Input>
        </Swapper>
    )
}


export {NotesSection};