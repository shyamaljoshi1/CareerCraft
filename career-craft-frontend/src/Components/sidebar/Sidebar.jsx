import SidebarItems from "./Sidebaritems";
import items from  'D:/react/CareerCraft/career-craft-frontend/src/assets/sidebar.json'
import './Sidebar.css'
function Sidebar(){
    

    return (
        
        <div className="sidebar">
            <img src="src\assets\logo.png" alt="App logo"  width="120px" justify-content="display"/>
            
            
           { items.map((item, index) => <SidebarItems key={index} props={item} /> ) }
            </div>
    )

}
export default Sidebar;
