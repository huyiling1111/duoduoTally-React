import React, {useRef} from 'react';
import styled from 'styled-components';

const Label = styled.label`
    display:flex;
    align-items: center;

    > span { margin-right: 16px; white-space: nowrap; }
    > input {
   
      display:block;
      width: 100%;
      height: 44px;
      background: none;
      border: none;
    }
`;

type Props = {
    label: string;
    placeholder:string;
    note:string;
    onChange: (value: string) => void;
};
const Input: React.FC<Props> = (props) => {
    // const note=props.value
    const inputRef = useRef<HTMLInputElement>(null);
    const onBlur = () => {
        inputRef.current && props.onChange(inputRef.current.value)
    }

    return (
        <Label>
            <span>{props.label}</span>
            <input ref={inputRef} defaultValue={props.note} type="text" placeholder={props.placeholder}
                   onBlur={onBlur}/>
        </Label>
    );
};

export {Input};