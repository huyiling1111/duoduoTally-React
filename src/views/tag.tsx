import React from 'react';
import {useTag} from "../useTag";
import {
    useParams
} from "react-router-dom";
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import Layout from "../components/Layout";

type Params={
    'id':string
}

const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background:white;
`;

const Tag: React.FC = () => {
    const {findTag}=useTag()
    let {id} = useParams<Params>();
//findTag(id).name

    return (
        <Layout>
            <Topbar>
                <Icon name="left"/>
                <span>编辑标签</span>
                <Icon/>
            </Topbar>
            <div>
                <label>
                    <span>标签名</span>
                    <input type="text" placeholder="标签名"/>
                </label>
            </div>
            <div>
                <Button>删除标签</Button>
            </div>
        </Layout>
    );
};


export {Tag};
