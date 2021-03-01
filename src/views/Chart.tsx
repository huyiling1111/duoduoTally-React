import Layout from "components/Layout";

import styled from "styled-components";

import {CategorySection} from "./money/CategorySection";
import {useState} from "react";
import {useRecords} from "../hooks/useRecords";
import NP from 'number-precision';
import dayjs from "dayjs";
import day from "dayjs";
import {ChartMain} from "./chart/ChartMain";
import {option} from './chart/chartOption';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;

`;
const CategoryWrapper = styled.div`
  background: white;
`;


const Chart = () => {
    const [category, setCategory] = useState<'-' | '+'>('-')
    //获取所有记账记录中收入或者支出的记账记录
    const {records} = useRecords();
    const categoryRecords = records.filter(record => record.category === category);
    console.log(categoryRecords, 'categoryRecords')
    //获取7天的收入或者支出的金额数据
    //dateValue = [{date:'2021-02-01',sumAmount:10},{date:'2021-02-02',sumAmount:0}]
    const dateValue = [];
    for (let i = 0; i < 7; i++) {
        //获取7天中每天的日期
        const date = dayjs().subtract(i, 'day').format('YYYY-MM-DD');
        console.log(date)

        //找到对应日期的记账数据
        const currentDayRecords = categoryRecords.filter(record => day(record.createdAt).format('YYYY-MM-DD') === date);

        //将对应的这天的记账数据的所有amount:金额放到数组中
        const currentRecordsAmount = currentDayRecords.map(record => record.amount);
        //将每天的记账金额相加
        const sumAmount = currentRecordsAmount.reduce((sum, n) => NP.plus(sum, n), 0);
        //展示对应的日期的记账总金额
        dateValue.unshift({date, sumAmount});
    }

    //从今天开始向前7天的日期
    //['02-01','02-02'...]
    const showDate = dateValue.map(item => dayjs(item.date).format('MM-DD'));
    //每天的记账金额
    //[5,8,...]
    const showValue = dateValue.map(item => item.sumAmount);
//找到这7天中所有的收入或者支出的记账数据
    const currentDate = dateValue.map(item => item.date);
    const currentCategoryRecords = categoryRecords.filter(record => currentDate.indexOf(record.createdAt) >= 0);

    //计算7天中的总支出或者总收入
    const totalAmount = showValue.reduce((sum, n) => NP.plus(sum, n), 0);
    const averageAmount = NP.divide(totalAmount, 7).toFixed(2);
    return (
        <MyLayout>

            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={(category) => {
                                     setCategory(category)
                                 }}/>
            </CategoryWrapper>
            <ChartMain option={option(showDate, showValue)}
                       category={category}
                       records={currentCategoryRecords}
                       totalAmount={totalAmount}
                       averageAmount={averageAmount}
            />

        </MyLayout>
    );
};

export default Chart;
