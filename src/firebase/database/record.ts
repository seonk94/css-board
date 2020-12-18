import { IRecord } from 'src/types';
import { db } from '..';


export async function getRecords(id : string) {
  const ref = db.collection(id);
  const doc = await ref.doc('records').get();
  if (doc.exists) return Object.values(doc.data() || {}) as IRecord[];
  return [] as IRecord[];
}

export async function postRecord(id : string, record : IRecord) {
  const ref = db.collection(id);
  try {
    await ref.doc('records').set({
      [record.id] : record
    }, { merge : true });
    return record;
  } catch(e) {
    console.error(e);
  }
}