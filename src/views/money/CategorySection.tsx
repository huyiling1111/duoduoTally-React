import styled from "styled-components";
import React, {useState} from "react";
import theme from "../../constants/theme";
import Icon from "../../components/Icon";
import {useHistory} from "react-router-dom";

const Swapper = styled.section`
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.color};
  font-size: 14px;

  .icon {
    width: 30px;
    height: 30px;
    fill: #fff;
    padding: 5px;
  }

  > ul {
    border: 1px solid #fff;
    width: 60%;
    border-radius: 4px;
    background: ${ theme.color };
    color: #fff;
    display:flex;
    > li {
      padding: 4px 0;
      display:flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      &.selected {
        color: ${ theme.color };
        background: #fff;
      }
    }
  }

  > span {
    display: inline-block;
    color: #fff;
    width: 30px;height: 30px;

  }

}
`;

const categoryMap = {'-': '支出', '+': '收入'};
type Keys = keyof typeof categoryMap;
const categoryList: Keys[] = ['-', '+']
type Props = {
    value: '-' | '+',
    onChange: (c: '-' | '+') => void;
}
const CategorySection: React.FC<Props> = (props) => {
    const history = useHistory()
    const category = props.value
    return (
        <Swapper>
            <span/>
            {/*<Icon  name="back"   onClick={() => history.goBack()}/>*/}
            <ul>
                {categoryList.map((c) => {
                    return <li key={c} className={c === category ? 'selected' : ''} onClick={() => {
                        props.onChange(c)
                        console.log('222')
                    }}>{categoryMap[c]}</li>
                })}
            </ul>
            <span/>
        </Swapper>
    )
}
export {CategorySection};
