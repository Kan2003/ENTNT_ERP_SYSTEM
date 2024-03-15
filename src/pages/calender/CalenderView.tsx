import React, { useState } from 'react';

interface Order {
  id: number;
  orderNumber: string;
  expectedDeliveryDate: Date;
}

const CalendarView: React.FC<{ orders: Order[] }> = ({ orders }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Filter orders based on the selected date
  const filteredOrders = selectedDate
    ? orders.filter(order => {
        const orderDate = new Date(order.expectedDeliveryDate);
        return (
          orderDate.getDate() === selectedDate.getDate() &&
          orderDate.getMonth() === selectedDate.getMonth() &&
          orderDate.getFullYear() === selectedDate.getFullYear()
        );
      })
    : [];

  return (
    <div>
      <h2>Calendar View</h2>
      <div>
        {/* Calendar */}
        <div>
          {/* Render your calendar UI here */}
          {/* For simplicity, let's assume it's a list of dates */}
          {[...Array(31)].map((_, index) => {
            const date = new Date();
            date.setDate(index + 1); // Increment date index to start from 1
            return (
              <div
                key={index}
                style={{
                  cursor: 'pointer',
                  border: '1px solid black',
                  padding: '5px',
                  backgroundColor:
                    selectedDate &&
                    date.getDate() === selectedDate.getDate() &&
                    date.getMonth() === selectedDate.getMonth() &&
                    date.getFullYear() === selectedDate.getFullYear()
                      ? 'lightblue'
                      : 'transparent'
                }}
                onClick={() => setSelectedDate(date)}
              >
                {date.toDateString()}
              </div>
            );
          })}
        </div>
        {/* Orders due for selected date */}
        <div>
          {selectedDate && (
            <div>
              <h3>Orders Due on {selectedDate.toDateString()}</h3>
              <ul>
                {filteredOrders.length > 0 ? (
                  filteredOrders.map(order => (
                    <li key={order.id}>
                      Order Number: {order.orderNumber}, Expected Delivery Date:{' '}
                      {order.expectedDeliveryDate.toDateString()}
                    </li>
                  ))
                ) : (
                  <li>No orders due for delivery on this date.</li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
