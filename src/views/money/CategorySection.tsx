import styled from "styled-components";
import React, {useState} from "react";

const Swapper = styled.section`
  font-size: 24px;

  > ul {
    display: flex;
    background: #c4c4c4;

    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;

      &.selected::after {
        content: "";
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

const categoryMap = {'-': '支出', '+': '收入'};
type Keys=keyof typeof categoryMap;
const categoryList:Keys[]=['-','+']
const CategorySection: React.FC = (props) => {
    const [category, setCategory] = useState('-')
    console.log(category)

    return (
        <Swapper>
            <ul>
                {categoryList.map((c) => {
                    return <li key={c} className={c===category?'selected':''} onClick={()=>{setCategory(c)}}>{categoryMap[c]}</li>
                })}
            </ul>
        </Swapper>
    )
}
export {CategorySection};
