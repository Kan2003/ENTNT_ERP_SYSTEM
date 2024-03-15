import React, { useState } from 'react';
import CalenderHeader from './CalenderHeader';
import Weeks from './Weeks';
import DatesMatrix from './DatesMatrix';
import Events from './Events';
import "./calendar.scss";
const generateDates = (): number[][] => {
    const calendar: number[][] = [[]];

    const today: Date = new Date();
    const startDate: Date = new Date(today.getFullYear(), today.getMonth(), 1);
    const endDate: Date = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    let week: number = 0;

    for (let i = 0; i < startDate.getDay(); i++) {
        calendar[week].push(null);
    }

    for (let i = 1; i <= endDate.getDate(); i++) {
        if (calendar[week].length === 7) {
            week++;
            calendar[week] = [];
        }
        calendar[week].push(i);
    }

    while (calendar[week].length < 7) {
        calendar[week].push(null);
    }
    return calendar;
};

const Calender: React.FC = () => {
    const dates: number[][] = generateDates();
    const [selectedDay, setSelectedDay] = useState<number | null>(null); // Change the type of selectedDay to number | null

    const daySelectHander = (day: number) => { // Specify the type of day argument as number
        setSelectedDay(day);
    };

    return (
      <div className='calendar-main'>
        <div className='calendar'>
            <CalenderHeader/>
            <Weeks />
            <DatesMatrix dates={dates} onSelect={daySelectHander} />
            <Events day={selectedDay} />
        </div>
      </div>
        
    );
};

export default Calender;
