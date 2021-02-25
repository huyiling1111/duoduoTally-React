import React from 'react';
import {useTag} from "../hooks/useTag";
import {
    useHistory,
    useParams
} from "react-router-dom";
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import Layout from "../components/Layout";
import {Input} from "components/Input";
import {Center} from 'components/Center';
import {Space} from 'components/Space';

type Params = {
    'id': string
}

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;
const InputWrapper = styled.div`
  background: white;
  padding: 0px 16px;
  margin-top: 8px;

`;


const Tag: React.FC = () => {
    const {findTag, updateTag,deleteTag} = useTag()
    let {id} = useParams<Params>();
    const history = useHistory()
    const tag = findTag(id);
    const onChange = (tagName: string) => {
        updateTag(id, {name: tagName})
    }
    const onClickBack = () => {
        history.goBack()
    }
    const tagContent = (tag: { id: number; name: string }) => (
        <div>

            <InputWrapper>
                <Input label="标签名" placeholder="标签名" note={findTag(id).name} onChange={onChange}/>
            </InputWrapper>

            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Button onClick={() => {
                    deleteTag(tag.id);
                }}>删除标签</Button>
            </Center>
        </div>
    );


    return (
        <Layout>
            <Topbar>
                <Icon name="left" onClick={onClickBack}/>
                <span>编辑标签</span>
                <Icon/>
            </Topbar>
            {tag ? tagContent(tag) : <Center>tag 不存在</Center>}
        </Layout>
    );
};


export {Tag};
