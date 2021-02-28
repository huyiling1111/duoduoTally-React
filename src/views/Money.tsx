import Layout from "components/Layout";
import styled from "styled-components";
import {CategorySection} from "./money/CategorySection";
import {NotesSection} from "./money/NotesSection";
import {NumberPadSection} from "./money/NumberPadSection";
import {TagsSection} from "./money/TagsSection";
import {useState} from "react";
import {useRecords} from "../hooks/useRecords";

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
    const {records, addRecord} = useRecords();
    const record =undefined
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({...selected, ...obj});
    };
    console.log(selected,'selected')
    console.log(records,'records')

    const submit = () => {
        if (addRecord(selected)) {
            alert('保存成功');
            setSelected(defaultFormData);

        }
    };
    return (
        <MyLayout>
            {/*{JSON.stringify(selected)}*/}
            <CategorySection value={selected.category} onChange={category => onChange({category})}/>
            <TagsSection  category={selected.category} defaultTag={record} onSelect={tag=>{onChange({tag})}}/>
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
