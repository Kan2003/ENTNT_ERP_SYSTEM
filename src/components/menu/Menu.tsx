import { Link } from "react-router-dom"
import "./menu.scss"


const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">MAIN</span>
        <Link to='/' className="listItem">
          <img src="/home.svg" alt="" />
          <p>Dashboard</p>
        </Link>
        <Link to='/products' className="listItem">
          <img src="/product.svg" alt="" />
          <p>Products</p>
        </Link>
        <Link to='/orders' className="listItem">
          <img src="/order.svg" alt="" />
          <p>Orders</p>
        </Link>
      </div>
    </div>
  )
}

export default Menu
