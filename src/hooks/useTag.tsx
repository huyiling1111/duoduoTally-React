import {useEffect, useState, useRef} from 'react';
import {createId} from "../lib/createId";
import {useUpdate} from "./useUpdate";
import {userIncomeTags, userOutlayTags} from 'constants/userDefaultTags'
import {TagItem} from "../views/money/TagsSection";

// useTag最好拆成收入和支出
const useTag = (category: '-' | '+') => {

    const [incomeTags, setIncomeTags] = useState<{ 'title': string, 'value': string }[]>([]);
    const [outlayTags, setOutlayTags] = useState<{ 'title': string, 'value': string }[]>([]);
    let key: 'userIncomeTags' | 'userOutlayTags' = category === '-' ? 'userOutlayTags' : 'userIncomeTags'
    const updateTags=category === '-' ? outlayTags : incomeTags

    useEffect(() => {

        let localOutlayTTags = JSON.parse(localStorage.getItem('userOutlayTags' ) || '[]')
        let localIncomeTTags = JSON.parse(localStorage.getItem('userIncomeTags' ) || '[]')
            setOutlayTags(localOutlayTTags.length===0?userOutlayTags:localOutlayTTags)
            setIncomeTags(localIncomeTTags.length===0?userIncomeTags:localIncomeTTags)

    }, [])
    useUpdate(() => {
        localStorage.setItem(key, JSON.stringify(updateTags))
        console.log('set item')
    }, [incomeTags,outlayTags])



   const userTags:TagItem[]=category==='-'?outlayTags:incomeTags


    //
    // const findTag = (id: string) => {
    //     return tags.filter((tag) => {
    //         return tag.id === parseInt(id)
    //     })[0]
    // }
    // const getName = (id: number) => {
    //     const tag = tags.filter(t => t.id === id)[0];
    //     return tag ? tag.name : '';
    // };
    // const updateTag = (id: string, {name: name}: { name: string }) => {
    //     const index = tags.indexOf(findTag(id)) //索引
    //     const cloneTags = JSON.parse(JSON.stringify(tags))
    //     cloneTags.splice(index, 1, {'id': parseInt(id), 'name': name})
    //     setTags(cloneTags)
    // }
    // const deleteTag = (id: number) => {
    //     setTags(tags.filter(tag => tag.id !== id));
    // };
    // const addTag = () => {
    //     console.log('hi');
    //     const tagName = window.prompt('新标签的名称为');
    //     if (tagName !== null && tagName !== '') {
    //         setTags([...tags, {id: createId(), name: tagName}]);
    //     }
    // };
    console.log('----')
    return {userTags}
}
export {useTag}