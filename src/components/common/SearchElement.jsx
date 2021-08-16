import React from 'react';
export default function SearchElement({items}) {
    return (
        <div>
    {items.map((item,index)=>{
        return  <li
        style={{ width: "25%" }}
        key={index}
        className="list-group-item w-25"
      >
        <a
          href="/"
          className="list-group-item list-group-item-action list_look"
        >
          <div className="d-flex justify-content-between">
            <img
          src={`${process.env.REACT_APP_URL}/img/${item.images[0]}`}
          height="40px"
              width="40px"
              className="img-fluid"
              alt=''
            />
            <p className="pro_title_look">{item.title}</p>
            <small className="fw-bold mt-4">From Rs.{item.price}</small>
          </div>
        </a>
      </li>
    })}
        </div>
    )
}
