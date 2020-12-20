import moment from 'moment';
import { useState } from 'react';

const useDate = (initialValue : moment.Moment = moment()) => {
  const [date, setDate] = useState(initialValue);

  return [date, setDate] as [
    moment.Moment,
    typeof setDate
  ];
};
export default useDate;