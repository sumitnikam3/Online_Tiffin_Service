









const{getTotalCartAmount,token,setToken}=useContext(StoreContext);

const navigate =useNavigate();
const logout=() =>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")

}














{!token ?
:<div clasName='navbar-profile'>
    <img src={asserts.profile.icon} alt=""/>
    <ul  className="nav-profile-dropdown">
        <li><img src={asserts.bag_icon} alt=""/><p>Orders</p></li>
        <hr></hr>
        <li onClick={logout}><img src={asserts.logout_icon} alt=""/><p>Logout</p></li>
    </ul>
<div>}