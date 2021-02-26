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
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0
};
const Money = () => {
    const [selected, setSelected] = useState(defaultFormData);
    const {records, addRecord} = useRecords();
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({...selected, ...obj});
    };
    console.log(selected,'selected')
    const submit = () => {
        if (addRecord(selected)) {
            alert('保存成功');
            setSelected(defaultFormData);
        }
    };
    return (
        <MyLayout>
            {JSON.stringify(selected)}
            <TagsSection value={selected.tagIds} onChange={(tagIds) => {
                onChange({tagIds})
            }}/>
            <NotesSection value={selected.note} onChange={(note) => {
                onChange({note})
            }}/>
            <CategorySection value={selected.category} onChange={category => onChange({category})}/>
            <NumberPadSection value={selected.amount}
                              onChange={amount => onChange({amount})}
                              onOk={submit}
            />
        </MyLayout>
    );
};

export default Money;
