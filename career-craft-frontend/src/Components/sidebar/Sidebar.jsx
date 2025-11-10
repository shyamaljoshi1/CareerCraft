
import SidebarItems from "./SidebarItems";
import items from "../../assets/sidebar.json";
import './Sidebar.css';
import logo from "../../assets/logo.png";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* <div className="sidebar-header">
        <img src={logo} alt="App logo" className="sidebar-logo" />
      </div> */}

      {items.map((item, index) => (
        <SidebarItems key={index} props={item} />
      ))}
    </div>
  );
}

export default Sidebar;

