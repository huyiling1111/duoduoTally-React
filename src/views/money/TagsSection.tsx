import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {useTag}  from "hooks/useTag"

import {createId} from "../../lib/createId";
import theme from "../../constants/theme";
import Icon from "../../components/Icon";
import {useHistory} from "react-router-dom";



const Wrapper = styled.div`
  flex-grow: 99;
  box-shadow: 0 0 1px rgba(0, 0, 0, .25);
  overflow: auto;
  background: #FDFAF1;
`

export const Tags = styled.ul`
  display:flex;
  flex-wrap: wrap;
  padding: 30px 8px 10px 8px;
  overflow: auto;
`

export const TagItem = styled.li`
  margin-bottom: 20px;
  width: 20%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .icon {
    width: 28px; height: 28px;
    fill: #747777;
  }
`

export const IconWrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  background: #ECF0EF;
  height: 40px; width: 40px;  
  border-radius: 50%;
  margin-bottom: 10px;
  &.active {
    background: ${ (props: IconWrapperProps) => props.backgroundColor };
    > .icon {
      fill: #fff;
    }
  }
  &.define {
    background: #ECF0EF;
    border: 1px dashed #AAAAA8;
    > .icon {
      fill: #747777;
    }
  }
`

export const Title = styled.span`
  font-size: 12px;
  color: #816E6F;
`
type Props = {
    category:'-'|'+'
    defaultTag?: TagItem
    onSelect: (tag: TagItem) => void
}
const TagsSection:React.FC<Props>=(props)=>{
    // console.log('sss')
    const [selectedTag, setSelectedTag] = useState<TagItem>()
    const {userTags}=useTag(props.category)

    console.log('selectedTag',selectedTag)

    // // console.log(props.category,'category')
    // console.log('----')

    // const { get, set } = useUserTags(props.category === '-' ? 'userOutlayTags' : 'userIncomeTags')
    // const selectedTagIds=props.value
    //
    // console.log(props.category ,'tag1s')
    const history = useHistory()
    const onChange={props}

    // useEffect(()=>{
    //     if (!props.defaultTag) {
    //         setSelectedTag( userTags[0])
    //         props.onSelect(userTags[0])
    //     } else {
    //         setSelectedTag(props.defaultTag)
    //         props.onSelect(props.defaultTag)
    //     }
    //
    //
    // },[props.category])





    const onTagClick = (tag: TagItem) => {

            setSelectedTag(tag)
            props.onSelect(tag)

    }

    // const onTagToggle=(tagId:number)=>{
    //   const index=selectedTagIds.indexOf(tagId)
    //  if(index>=0){
    //      props.onChange([])
    //  }
    //  else{
    //      props.onChange([...selectedTagIds,tagId])
    //  }
    // }
    // const onAddTag=()=>{
    //     const tagName = window.prompt('新标签的名称为');
    //
    //     if (tagName !== null&&tags.map(tag=>tag.name).indexOf(tagName)<0) {
    //         setTags([...tags,{'id':createId(),'name':tagName}]);
    //     }else{
    //         window.alert('重复了')
    //     }
    // }
    // const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';
return(
    <Wrapper>
        <Tags>
            {
                userTags&&userTags.map(tag => {
                    return (<TagItem key={ tag.value } onClick={ () => onTagClick(tag) }>
                        <IconWrapper backgroundColor={ theme.tagColors[tag.value] }
                            className={ `${ selectedTag&&selectedTag.value === tag.value ? 'active' : '' } ${ tag.value === 'define' ? 'define' : '' }` }
                        >
                            <Icon name={ tag.value } />
                        </IconWrapper>
                        <Title>{ tag.title }</Title>
                    </TagItem>)
                })
            }
        </Tags>
    </Wrapper>
)
}

export{TagsSection};