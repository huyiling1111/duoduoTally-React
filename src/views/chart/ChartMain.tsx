import React from 'react';
import styled from 'styled-components';
import {RecordItem} from "../../hooks/useRecords";
import ReactECharts from 'echarts-for-react';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
const EchartsWrapper = styled.div`
  border-bottom: 1px solid #333;
  padding: 4px;

  > .average {
    font-size: .9em;
  }
`;
type Props = {
    option: {}
    records: RecordItem[]
    totalAmount: number
    averageAmount: string
    category:'-'|'+'
}


const ChartMain: React.FC<Props>= (props) => {
    const {option, category, totalAmount, averageAmount} = props;
    return (
        <Wrapper>
            <EchartsWrapper>
                <div className='total'>{category==='-'?'总支出':'总收入'}:{totalAmount}</div>
                <div className='average'>平均值:{averageAmount}</div>
                <ReactECharts
                    option={option}
                    style={{height: 200}}
                />
            </EchartsWrapper>

        </Wrapper>
    );
};

export {ChartMain};