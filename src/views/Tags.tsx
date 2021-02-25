import Layout from "components/Layout";
import Icon from "components/Icon";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useTag} from "hooks/useTag"
import {Button} from 'components/Button';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;

`;
const Swapper = styled.ul`
  font-size: 16px;
  background: white;

  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;

    > a {
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Space = styled.div`
  height: 16px;
`;


const Tags = () => {
    const {tags, addTag} = useTag()
    console.log('tags',tags)

    return (
        <MyLayout>
            <Swapper>
                {tags.map((tag) => {
                    return <li className="oneLine" key={tag.id}><Link to={`/tags/${tag.id}`}><span>{tag.id}{tag.name}</span> <Icon name="right"></Icon></Link>
                    </li>
                })}
            </Swapper>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Button onClick={addTag}>新增标签</Button>
            </Center>
        </MyLayout>
    );
};

export default Tags;
