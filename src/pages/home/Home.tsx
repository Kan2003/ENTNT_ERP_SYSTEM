import BarChartBox from "../../components/barChart/BarChartBox"
import BigChartBox from "../../components/bigChartBox/BigChartBox"
import ChartBox from "../../components/chartBox/ChartBox"
import PieChartBox from "../../components/pieChartBox/PieChartBox"
import TopBox from "../../components/topbox/TopBox"
import { barChartRevenue, barChartVisit, chartBoxCon, chartBoxProduct, chartBoxRev, chartBoxUser } from "../../data"
import "./home.scss"
                               
const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox/>
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser}/>
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct}/>
      </div>
      <div className="box box4">
        <PieChartBox/>
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxCon}/>
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRev}/>
      </div>
      <div className="box box7">
        <BarChartBox {...barChartRevenue}/>
      </div>
      <div className="box box8">
        <BigChartBox/>
      </div>
      <div className="box box9">
        <BarChartBox {...barChartVisit}/>
      </div>
    </div>
  )
}

export default Home
