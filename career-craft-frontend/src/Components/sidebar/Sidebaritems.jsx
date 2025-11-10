
import { useState } from "react";

function SidebarItems({ props }) {
  const [open, setOpen] = useState(false);

  if (props.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title" onClick={() => setOpen(!open)}>
          <span>
            {props.icon && <i className={props.icon}></i>}
            &nbsp;
            {props.title}
          </span>
          <i className={`bi ${open ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
        </div>
        <div className="sidebar-content">
          {props.childrens.map((child, index) => (
            <SidebarItems key={index} props={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <a href={props.path || "#"} className="sidebar-item plain">
        {props.icon && <i className={props.icon}></i>}
        {props.title}
      </a>
    );
  }
}

export default SidebarItems;
