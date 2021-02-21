import styled from "styled-components";
import React, {useRef, useState} from "react";

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
    const note=props.value
    const inputRef = useRef<HTMLInputElement>(null);
    const onBlur = () => {
        inputRef.current && props.onChange(inputRef.current.value)
    }

    return (
        <Swapper>
            <label>
                <span>备注</span>
                <input ref={inputRef} defaultValue={note} type="text" placeholder="在这里添加备注"
                       onBlur={onBlur}/>
            </label>
        </Swapper>
    )
}


export {NotesSection};