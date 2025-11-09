import {useState}  from "react"

function SidebarItems({props}){

    const [open, setOpen]=useState(false)
  

if(props.childrens){
      return (
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
            <div className="sidebar-title">
                <span>
                   {props.icon ? <i className={props.icon}></i>:""}
                    {props.title}
                    
                </span>
                <i className="bi-chevron-down toggle-btn" onClick={()=> setOpen(!open)}></i>
                
            </div>
            <div className="sidebar-content">
                {props.childrens.map((child,index) => <SidebarItems key={index} props={child}/>)}
                
            </div>
            </div>

           
        
    )
}
else{
  return(
    <a href={props.path || "#"}className="sidebar-item plain">
           
                <span>
                     {props.icon ? <i className={props.icon}></i>:""}
                    {props.title}
                    
                </span>
                </a>
  )
}
}

export default SidebarItems;