import Layout from "components/Layout";
import styled from "styled-components";
import {CategorySection} from "./money/CategorySection";
import {NotesSection} from "./money/NotesSection";
import {NumberPadSection} from "./money/NumberPadSection";
import {TagsSection} from "./money/TagsSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const Money = () => {
  return (
    <MyLayout>
      <TagsSection/>
      <NotesSection/>


      <CategorySection>

      </CategorySection>
      <NumberPadSection>

      </NumberPadSection>
    </MyLayout>
  );
};

export default Money;
