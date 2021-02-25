import {useEffect, useState,useRef} from 'react';
import {createId} from "../lib/createId";
import {useUpdate} from "./useUpdate";



const useTag = () => {
    const [tags, setTags] = useState<{'id':number,'name':string}[]>([]);
    console.log(tags,'tags')
    useEffect(()=>{
        let localTags=JSON.parse(localStorage.getItem('tags')||'[]')
        if(localTags.length===0){
            const defaultTags = [{'id': createId(), 'name': '衣'}, {'id': createId(), 'name': '食'}, {'id': createId(), 'name': '住'}, {'id': createId(), 'name': '行'}]
            setTags(defaultTags)
        }else{ setTags(localTags)}

    },[])
      useUpdate(()=>{localStorage.setItem('tags',JSON.stringify(tags))},[tags])

   const findTag=(id:string)=>{ return tags.filter((tag)=>{return tag.id ===parseInt(id)})[0]}
   const updateTag=(id:string,{name:name}:{name:string})=>{
       const index= tags.indexOf(findTag(id)) //索引
       const cloneTags= JSON.parse(JSON.stringify(tags))
       cloneTags.splice(index,1,{'id':parseInt(id),'name':name})
       setTags(cloneTags)
   }
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id));
    };
    const addTag = () => {
        console.log('hi');
        const tagName = window.prompt('新标签的名称为');
        if (tagName !== null && tagName !== '') {
            setTags([...tags, {id: createId(), name: tagName}]);
        }
    };

    return {tags, setTags,findTag,updateTag,deleteTag,addTag}
}
export {useTag}