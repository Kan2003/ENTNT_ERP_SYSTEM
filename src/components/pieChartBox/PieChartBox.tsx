import "./pieChartBox.scss";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'


const data = [
    { name: 'Mobile', value: 400 , color : '#0088FE' },
    { name: 'Dasktop', value: 300 , color : '#00C49F' },
    { name: 'tablet', value: 300 , color : '#FFBB28' },
    { name: 'LapTop', value: 200 , color : '#FF8042'},
  ];
  
const PieChartBox = () => {
  return (
    <div className='pieChartBox'>
      <h1>Users types</h1>
    <div className="chart">
      <ResponsiveContainer width="99%" height={300}>
        <PieChart >
            <Tooltip
            contentStyle={{background: "white" , borderRadius : "5px" , padding: "3px"}}
            />
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((item) => (
              <Cell key={item.name} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      </div>

      <div className="options">
        {data.map(item => (
            <div className="option" key={item.name}>
                <div className="title">
                    <div className="dot" style={{backgroundColor : item.color}}/>
                    <span>{item.name}</span>
                </div>
                <span>{item.value}</span>
            </div>
        ))}
      </div>
    </div>
  )
}

export default PieChartBox
