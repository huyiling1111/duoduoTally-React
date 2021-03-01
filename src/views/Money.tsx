import Layout from "components/Layout";
import styled from "styled-components";
import {CategorySection} from "./money/CategorySection";
import {NotesSection} from "./money/NotesSection";
import {NumberPadSection} from "./money/NumberPadSection";
import {TagsSection} from "./money/TagsSection";
import {useEffect, useState} from "react";
import {RecordItem, useRecords} from "../hooks/useRecords";
import {useHistory} from "react-router-dom";
import queryString from 'query-string'


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
type Category = '-' | '+'


const defaultFormData = {
    tag: {} as TagItem,
    note: '',
    category: '-' as Category,
    amount: 0
};
const Money = () => {
    const [selected, setSelected] = useState(defaultFormData);
    console.log(selected,'selected')
    const {records, addRecord,getRecord,updateRecord} = useRecords();
    const history = useHistory()
    const id = queryString.parse(history.location.search).id as string
    console.log(id,'id11')
    const record =undefined
    useEffect(() => {

      if(id){

          setSelected(getRecord(id) as RecordItem)
      }
    }, [])



    const onChange = (obj: Partial<typeof selected>) => {
        console.log('11')
        setSelected({...selected, ...obj});
    };
    console.log(selected,'selected')
    console.log(records,'records')

    const submit = () => {

        if(id){
           updateRecord(id,{...selected,'id':Number(id),'createdAt': (new Date()).toISOString()})
        }else {
            if (addRecord(selected)) {
                alert('保存成功');
                setSelected(defaultFormData);

            }
        }
    };
    return (
        <MyLayout>
            {/*{JSON.stringify(selected)}*/}
            <CategorySection value={selected.category} onChange={category => onChange({category})}/>
            <TagsSection  category={selected.category} value={selected.tag} onSelect={tag=>{onChange({tag})}}/>
            <NotesSection value={selected.note} onChange={(note) => {
                onChange({note})
            }}/>

            <NumberPadSection value={selected.amount}
                              onChange={amount => onChange({amount})}
                              onOk={submit}
            />
        </MyLayout>
    );
};

export default Money;
