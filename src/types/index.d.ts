export interface IRecord {
  id: string;
  title: string;
  content: string;
  dDay: string;
  image?: string;
  detailRecords: IRecord[];
}