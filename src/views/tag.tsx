import React from 'react';
import {useTag} from "../useTag";
import {
    useParams
} from "react-router-dom";

type Params={
    'id':string
}


const Tag: React.FC = () => {
    const {findTag}=useTag()
    let {id} = useParams<Params>();


    return (
        <div>{findTag(id).name}</div>
    );
};


export {Tag};
