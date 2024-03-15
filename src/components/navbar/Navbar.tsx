import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="icon.png" width={"30px"} alt="" />
        <span>ERP System</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon"/>
        <img src="/app.svg" alt="" className="icon" />
        <div className="user">
          <img src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <span>Kanha</span>
        </div>
        <img src="/settings.svg" className="icon" alt="" />
      </div>
    </div>
  )
}

export default Navbar
