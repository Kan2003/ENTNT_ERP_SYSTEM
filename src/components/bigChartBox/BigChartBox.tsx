import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./bigChartBox.scss";



const data = [
    {
      name: 'Sun',
      books: 4000,
      cloths: 2400,
      electronic: 2400,
    },
    {
      name: 'Mon',
      books: 3000,
      cloths: 4000,
      electronic: 8000,
    },
    {
      name: 'Tue',
      books: 4000,
      cloths: 15000,
      electronic: 10000,
    },
    {
      name: 'Wed',
      books: 500,
      cloths: 6000,
      electronic: 8000,
    },
    {
      name: 'Thu',
      books: 1000,
      cloths: 5000,
      electronic: 9000,
    },
    {
      name: 'Fri',
      books: 4000,
      cloths: 12000,
      electronic: 3000,
    },
    {
      name: 'sat',
      books: 1000,
      cloths: 1000,
      electronic: 5000,
    },
    
  ];

const BigChartBox = () => {
  return (
    <div className="bigChartbox">
      <h1>Revenue Analytics</h1>
      <div className="chart">
      <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="books" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="cloths" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="electronic" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BigChartBox
