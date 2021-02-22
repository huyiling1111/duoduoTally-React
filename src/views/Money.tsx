import Layout from "components/Layout";
import styled from "styled-components";
import {CategorySection} from "./money/CategorySection";
import {NotesSection} from "./money/NotesSection";
import {NumberPadSection} from "./money/NumberPadSection";
import {TagsSection} from "./money/TagsSection";
import {useState} from "react";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
type Category = '-' | '+'
const Money = () => {
    const [data, setData] = useState({
        tags: [] as string[],
        note: '',
        category: '-' as Category,
        amount: 0 as number,

    });
    console.log(data,'data')
    const onChange = (obj: Partial<typeof data>) => {
        setData({...data, ...obj});
    };

    return (
        <MyLayout>
            {data.tags.join('')}{data.note}{data.category}{data.amount}
            <TagsSection value={data.tags} onChange={(tags) => {
                onChange({tags})
            }}/>
            <NotesSection value={data.note} onChange={(note) => {
                onChange({note})
            }}/>
            <CategorySection value={data.category} onChange={category => onChange({category})}/>
            <NumberPadSection  onOk={(output)=>{onChange({amount:output})} }
            />
        </MyLayout>
    );
};

export default Money;
