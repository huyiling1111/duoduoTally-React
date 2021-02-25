import styled from "styled-components";
import React, {useState} from "react";
import {useTag}  from "hooks/useTag"
import {create} from "domain";
import {createId} from "../../lib/createId";
const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0 -12px;
    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected{
        background: red;
      }
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;
type Props = {
    value: string[];
    onChange: (selected: string[]) => void;
}
const TagsSection:React.FC<Props>=(props)=>{
    const {tags,setTags}=useTag()
    const selectedTags=props.value
    const onChange={props}

    const onTagToggle=(tag:string)=>{
      const index=selectedTags.indexOf(tag)
     if(index>=0){
         props.onChange([])
     }
     else{
         props.onChange([...selectedTags,tag])
     }
    }
    const onAddTag=()=>{
        const tagName = window.prompt('新标签的名称为');

        if (tagName !== null&&tags.map(tag=>tag.name).indexOf(tagName)<0) {
            setTags([...tags,{'id':createId(),'name':tagName}]);
        }else{
            window.alert('重复了')
        }
    }
    const getClass = (tag: string) => selectedTags.indexOf(tag) >= 0 ? 'selected' : '';
return(
    <Wrapper>
    <ol>{tags.map((tag)=>(<li key={tag.id}  onClick={()=>{onTagToggle(tag.name)}}
        className={getClass(tag.name)}>
        {tag.name}
        </li>
    ))
    }

    </ol>
    <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
)
}

export{TagsSection};