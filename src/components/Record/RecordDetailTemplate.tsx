import React, { useContext, useEffect, useState } from 'react';
import { getRecordById } from 'src/firebase/database/record';
import { firebaseAuth } from 'src/provider/AuthProvider';
import { IRecord } from 'src/types';
import AddRecordScheduleButton from './AddRecordScheduleButton';
import RecordDetailCard from './RecordDetailCard';
import RecordPreviewCard from './RecordPreviewCard';

interface Props {
  id: string;
}

function RecordDetailTemplate({ id } : Props) {
  const { user } = useContext(firebaseAuth);
  const [record, setRecord] = useState<IRecord | null>(null);
  useEffect(() => {
    const fetchRecord = async () => {
      if (user?.uid) {
        const record = await getRecordById(user.uid, id);
        setRecord(record as IRecord);
      }
    };
    fetchRecord(); 
  }, []);
  return (
    record 
      ? <>
        <RecordPreviewCard record={record}/>
        <AddRecordScheduleButton/>
        {
          (record.detailRecords || []).map(r => <RecordDetailCard record={r}
            key={r.id}/>)
        }
        
      </>
      : <h3>
        Not found Id
      </h3>
  );
}

export default RecordDetailTemplate;
