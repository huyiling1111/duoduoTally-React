import styled from "styled-components";
import React, {useEffect, useState} from "react";
import theme from "../../constants/theme";
const Swapper = styled.section`
  display: flex;
  flex-direction: column;

  > .output {
    background: white;
    font-size: 36px;
    height: 72px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
    inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }

  > .pad {
    > button {
      font-size: 18px;
      background:#FDFAF1;
      float: left;
      width: 25%;
      height: 64px;
      border: 1px solid #EDEDED;
      

      &.ok {
        height: 128px;
        float: right;
        background: ${theme.color};
        color:white;
      }

      &.zero {
        width: 50%;
      }

      //&:nth-child(1) {
      //  background: #f2f2f2;
      //}
      //
      //&:nth-child(2),
      //&:nth-child(5) {
      //  background: #e0e0e0;
      //}
      //
      //&:nth-child(3),
      //&:nth-child(6),
      //&:nth-child(9) {
      //  background: #d3d3d3;
      //}
      //
      //&:nth-child(4),
      //&:nth-child(7),
      //&:nth-child(10) {
      //  background: #c1c1c1;
      //}
      //
      //&:nth-child(8),
      //&:nth-child(11),
      //&:nth-child(13) {
      //  background: #b8b8b8;
      //}

    
    }
  }
`;
type Props = {
    value: number;
    onOk: (value: number) => void;
    onChange: (amount: number) => void;
}


const NumberPadSection: React.FC<Props> = (props) => {
    const [output, setOutput] = useState('')
    const propOutput=props.value.toString()
    useEffect(() => {

        propOutput && setOutput(propOutput)
    }, [propOutput])
    const handleNumber = (e: React.MouseEvent) => {


        const text = (e.target as HTMLButtonElement).innerText
        if (output.length >= 10) {
            return
        }
        switch (text) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (output.slice(0, 1) === "0" && output.indexOf('.') === -1) {
                    setOutput(text)
                    props.onChange(parseInt(text))
                } else {
                    setOutput(output + text)
                    props.onChange(parseInt(output + text))
                }
                break;
            case '.' :
                if (output.indexOf('.') > -1) {
                } else {
                    setOutput(output + text)
                    props.onChange(parseInt(output + text))
                }
                break;
            case '删除':
                if (output.length <= 1) {
                    setOutput('0')
                    props.onChange(0)
                } else {
                    setOutput(output.slice(0, -1))
                    props.onChange(parseInt(output.slice(0, -1)))
                }
                break;
            case'清空':
                setOutput('0')
                props.onChange(0)
                break;
            case 'OK':
                props.onOk(parseFloat(output))
                setOutput('0')

                break;
            default:
                return '';

        }

    }

    return (
        <Swapper>
            <div className="output">{output}</div>
            <div className="pad clearfix" onClick={handleNumber}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">OK</button>
                <button className="zero">0</button>
                <button className="dot">.</button>
            </div>
        </Swapper>
    )

}


export {NumberPadSection};