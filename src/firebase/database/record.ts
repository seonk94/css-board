import { IRecord } from 'src/types';
import { db } from '..';

const idRef = db.collection('9e20wCoy0KRMB8ufdBKRUY9FJ5C3');

export async function getRecords() {
  const doc = await idRef.doc('records').get();
  if (doc.exists) return Object.values(doc.data() || {}) as IRecord[];
  return [] as IRecord[];
}

export async function postRecord(record : IRecord) {
  try {
    await idRef.doc('records').set({
      [record.id] : record
    }, { merge : true });
    return record;
  } catch(e) {
    console.error(e);
  }
}