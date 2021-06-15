import React from "react";
import './style/navmenu.css';
export default function NavMenu({ navMenuData }) {
  
  return (
    <div  class="bg-light">
      <ul  className="parent d-flex justify-content-center  p-4 w-100 menu">
        {navMenuData.map(list=>(
          <ul className="child   text-bold list-unstyled p-3">
          <li className="fw-bold text-secondary  list-group list-group-flush">{list.title}</li>
            {list.items.map((e,index)=>{
              return <li className="text-dark fw-light">{e}</li>
            })}
        </ul>)
        )}
        {/* <ul className="child">
          <li className="title">item1</li>
          <li>item1</li>
          <li>item1</li>
          <li>item1</li>
        </ul> */}
      </ul>
    </div>
  );
}

