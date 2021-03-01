import Layout from '../components/Layout';
// import React, {ReactNode, useState} from 'react';

import styled from 'styled-components';
import {CategorySection} from "./money/CategorySection";
import {ReactNode, useState} from "react";
// import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTag} from "../hooks/useTag";
import {RecordItem, useRecords} from "../hooks/useRecords";
import {stringify} from "querystring";
import { ActionSheet } from 'antd-mobile';

import day from 'dayjs';
import Icon from "../components/Icon";
import {useHistory} from "react-router-dom";

const CategoryWrapper = styled.div`
  background:white;
`;

const Item = styled.div`
  display:flex;
  justify-content: space-between;
  background: white;
  color: #797979;
  font-size: 14px;
  line-height: 20px;
  padding: 10px 16px;
  >.tagTitle{
    margin-left:20px;
  }
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;
const Header = styled.h3`
  font-size: 12px;
  color:#949494;
  line-height: 20px;
  padding: 10px 16px;
`;

function Statistics() {
   const [category,setCategory]=useState<'-'|'+'>('-')
    const {records,deleteRecord} = useRecords();
    const history = useHistory()
    // const {getName} = useTag();
    const hash:{[K:string]:RecordItem[]}={} //{'2021-1-26':[item,item],'2021-1-26':[item,item]}
    const selectRecords=records.filter((r)=>{return r.category===category})
    selectRecords.forEach((r)=>{
        const key = day(r.createdAt).format('YYYY年MM月DD日');
        if(!(key in hash)){
            hash[key]=[]
        }
        hash[key].push(r)}

    )
    const array=Object.entries(hash).sort((a,b)=>{
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0;
    })
    console.log(array)

    const onChange=(category:'-'|'+')=>{
        setCategory(category)
    }
   const showActionSheet=(id:string)=>{
       console.log('sss')
       const buttons = ['编辑', '删除', '取消']

       ActionSheet.showActionSheetWithOptions({
           options: buttons,
           cancelButtonIndex: buttons.length - 1,
           destructiveButtonIndex: buttons.length - 2,
           maskClosable: true
       }, (buttonIndex) => {
           if (buttonIndex === 0) {
               history.push(`/detail?id=${ id }`)
           } else if (buttonIndex === 1) {
               deleteRecord(id)

           }
       })

   }


    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={value => setCategory(value)}/>
            </CategoryWrapper>
            {array.map(([date, records]) => <div key={date}>
                <Header>
                    {date}
                </Header>
                <div>
                    {records.map(r => {
                        return <Item key={r.id} onClick={()=>{showActionSheet((r.id!).toString())}}>
                            <div className="tags oneLine">
                           <Icon name={r.tag.value}></Icon>
                                <span className='tagTitle'>{r.tag.title}</span>
                            </div>
                            {r.note && <div className="note">
                                {r.note}
                            </div>}
                            <div className="amount">
                                ￥{r.amount}
                            </div>
                        </Item>;
                    })}
                </div>
            </div>)}
        </Layout>
    );
}


export default Statistics;
