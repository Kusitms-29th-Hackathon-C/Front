import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import * as S from './CustomCalendar.styles';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CustomCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <S.calendarContainer>
      <Calendar onChange={onChange} value={value} />
      {/* {moment(value as Date).format('YYYY-MM-DD')} */}
    </S.calendarContainer>
  );
};

export default CustomCalendar;
