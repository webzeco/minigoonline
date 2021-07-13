import React, {  useState } from "react";
import { Link } from "react-router-dom";
import Search from "./UpperHeader";
import NavMenu from "./NavMenu";
import "./style/navmenu.css";
export default function Header() {
  const [collection, setCollection] = useState(null);
  const showMenu = (collection) => {
    setCollection(collection);
  };
  const hideMenu = () => {
    setCollection(null);
  };
  // Coll.setCollectionHandler("Ali Ahmad");

  return (
    <>
      <div className="row bg-white fixed-top">
       <Search/>
        {/* navbar starts */}
        <div className="d-flex justify-content-center" >
          <Link style={{ textDecoration: 'none', color: 'black' }} exact className='p-2 active' onMouseEnter={hideMenu} to="/">Best Sellers
          </Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} className='p-2 link' onMouseEnter={() => showMenu("Personalized")} to="/">Personalized</Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} className='p-2' onMouseEnter={() => showMenu("Times Goods")} to="/">Times Goods</Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} className='p-2' onMouseEnter={() => showMenu("Wall Art")} to="/">Wall Art</Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} className='p-2' onMouseEnter={() => showMenu("Books")} to="/">Books  </Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} className='p-2' onMouseEnter={hideMenu} to="/">Special Sections</Link>
          <Link style={{ textDecoration: 'none', color: 'black' }} className='p-2' onMouseEnter={hideMenu} to="/">Sale</Link>
        </div>
        <NavMenu onMouseEnter={hideMenu} hideMenu={hideMenu} collection={collection} />
      </div>
    </>
  );
}

