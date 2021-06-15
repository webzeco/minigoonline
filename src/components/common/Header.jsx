import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import NavMenu from './NavMenu';


export default function Header() {
  const [show, setCount] = useState(false);
  return (
    <>
    <nav class="d-flex justify-content-center p-2" >
      <Link exact className='p-2' activeClassName="active" to="/">Best Sellers
    </Link>
      <Link className='p-2 link' activeClassName="active" to="/">Personalized</Link>
      <Link className='p-2' activeClassName="active" to="/">Times Goods</Link>
      <Link className='p-2' activeClassName="active" to="/">Wall Art</Link>
      <Link className='p-2' activeClassName="active" to="/">Books  </Link>
      <Link className='p-2' activeClassName="active" to="/">Special Sections</Link>
      <Link className='p-2' activeClassName="active" to="/">Sale</Link>
    </nav>
    <NavMenu  navMenuData={navMenuData}></NavMenu>
</>
  )
};

const navMenuData=[{
  title:"PERSONALIZED BOOKS",
  items:[
    "Ultimate Birthday Book",
    "Custom Birthday Book",
    "Special Day Book",
    "Anniversary Book",
    "Sports History Books"
    ]
},{ 
title:"CUSTOM REPRINTS",
  items:[
    "Front Page Reprint",
    "Inside Page Reprint",
    "Front Page Puzzle",
    "Anniversary Book",
    ]
}
];