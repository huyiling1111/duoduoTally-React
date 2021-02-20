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
interface  CategoryMap {
    '-':string,
    '+':string
}
const categoryMap: CategoryMap ={'-':'支出','+':'收入'};
const CategorySection:React.FC=(props)=>{
    const [category,setCategory]=useState('-')

    // type Keys=keyof typeof categoryMap;
    return(
        <Swapper>
            <ul>
            {
                Object.keys(<CategoryMap>categoryMap).map(c=>

                    {return<li key={c}>{categoryMap[c]}</li>}
                    )
                    }

                </ul>
            }
        </Swapper>
    )
}
export {CategorySection};
