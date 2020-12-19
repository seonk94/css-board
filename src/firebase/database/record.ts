import { IRecord } from 'src/types';
import { db } from '..';

export async function getAllRecord(uid: string) {
  const records : IRecord[] = [];
  try {
    const ref = db.collection(uid);
    const querySnapshot = await ref.get();
    querySnapshot.forEach(doc => records.push(doc.data() as IRecord));
  } catch(e) {
    console.error(e);
  }
  return records;
}

export async function getRecordById(uid: string, recordId: string) {
  const ref = db.collection(uid);
  try {
    const doc = await ref.doc(recordId).get();
    if (doc.exists) return doc.data() as IRecord;
  } catch(e) {
    console.error(e);
    return null;
  }
}

export async function postRecord(uid : string, record : IRecord) {
  const ref = db.collection(uid);
  const docId = new Date().getTime().toString();
  try {
    await ref.doc(docId).set(record, { merge : true });
    return record;
  } catch(e) {
    console.error(e);
    return null;
  }
}