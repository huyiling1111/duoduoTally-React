import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
import {createId} from "../lib/createId";

export type RecordItem = {
    tag: TagItem
    note: string
    id:number
    category: '+' | '-'
    amount: number
    createdAt: string // ISO 8601
}
type newRecordItem = Omit<RecordItem, 'createdAt' |'id'>

export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([]);
    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
    }, []);
    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records));
    }, [records]);

    const addRecord = (newRecord: newRecordItem) => {
        console.log(newRecord)
        if (newRecord.amount <= 0) {
            alert('请输入金额');
            return false;
        }
        if (Object.keys(newRecord.tag).length === 0) {
            alert('请选择标签');
            return false;
        }
        const record = {...newRecord, createdAt: (new Date()).toISOString(),id:createId()};
        setRecords([...records, record]);
        return true;
    };
   const deleteRecord=(id:string)=>{
       const newRecords=records.filter((record)=>{
           return record.id.toString()!==id
       })
       setRecords(newRecords)
   }
   const updateRecord=(id:string,record:RecordItem)=>{
    const newRecords=records.map((r)=>{return r.id.toString()===id?record:r})

       setRecords(newRecords)
   }


    return {records, addRecord,deleteRecord,updateRecord};
};
