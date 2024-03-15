import React from 'react';
import "./orders.scss"

interface RowData {
  id: number,
  name: string;
  email: string;
  date : string;
  status : string;
}

interface TableProps {
  data: RowData[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className='containner-order '>
      <div className="title">
        <h2>ORDERS</h2>
      </div>
      
      <table className='table'>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer Name</th>
          <th>Customer Email</th>
          <th>Order Date</th>
          <th>Order Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.date}</td>
            <td>{row.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

const Orders: React.FC = () => {
  const rowData: RowData[] = [
    { id: 1, name: "I Phone X", email: 'john@example.com' , date : "12/02/2024" , status : "delievered" },
    { id: 2, name: "Fridge", email: 'new2@example.com' , date : "12/04/2024" , status : "delievered" },
    { id: 3, name: "soap", email: 'dfefe4@example.com' , date : "12/06/2024" , status : "Waiting" },
    { id: 4, name: "jeans", email: 'efegr7@example.com' , date : "12/08/2024" , status : "Shiped" },
    { id: 5, name: "speaker", email: 'ededede5@example.com' , date : "12/10/2024" , status : "arrived" },
    { id: 6, name: "Ear Buds", email: 'vrevv7@example.com' , date : "12/11/2024" , status : "cancel" },
    { id: 7, name: "tshirt", email: 'vervv7@example.com' , date : "12/05/2024" , status : "delievered" },
    { id: 8, name: "jeans", email: 'vevrev@example.com' , date : "12/02/2024" , status : "shiped" },
    { id: 9, name: "tooth brush", email: 'kanha@example.com' , date : "12/01/2024" , status : "cancel" },
    { id: 10, name: "nothing 2a", email: 'jkanahdchdohn@example.com' , date : "12/02/2024" , status : "delievered" },
    { id: 11, name: "samsung s21 Pro", email: 'newdncjhn@example.com' , date : "12/03/2024" , status : "shiped" },
    
  ];

  return (
    <div>
      <Table data={rowData} />
    </div>
  );
};

export default Orders;
