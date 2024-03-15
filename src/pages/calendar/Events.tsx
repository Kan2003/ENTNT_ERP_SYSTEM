import React from 'react';

interface EventsProps {
    day: number;
}

const Events: React.FC<EventsProps> = ({ day }) => {
    const orderList: Record<number, string[]> = {
        1: ["ORDER-ID : 1", "ORDER-ID : 2"],
        2: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        3: ["No Orders"],
        4: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        5: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        6: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        7: ["No Orders"],
        9: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        8: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        10: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        11: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        12: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        13: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        14: ["No Orders"],
        15: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        16: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        17: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        18: ["No Orders"],
        19: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        20: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        21: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        22: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        23: ["No Orders"],
        24: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        25: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        26: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        27: ["No Orders"],
        28: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        29: ["ORDER-ID : 12 ", "ORDER-ID : 15"],
        30: ["No Orders"],
        31: ["No Orders"],
        
    };

    return (
        <div>
            <p style={{fontWeight : "bold"}}>Order Dues On {day}</p>
            {orderList[day] && (
                <ul>
                    {orderList[day].map((order, index) => (
                        <li key={index} style={{fontSize : "14px"}}>{order}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Events;
