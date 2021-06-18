import React from "react";
import './style/navmenu.css';
import { Link } from 'react-router-dom';

export default function NavMenu({collection,hideMenu}) {
  
const navMenuData=[
  {
  collection:'Personalized',
  menu:[
    {
      title:"PERSONALIZED BOOKS",
      items:[
        "Ultimate Birthday Book",
        "Custom Birthday Book",
        "Special Day Book",
        "Anniversary Book",
        "Sports History Books"
        ]
    },
    { 
      title:"CUSTOM REPRINTS",
        items:[
          "Front Page Reprint",
          "Inside Page Reprint",
          "Front Page Puzzle",
          "Anniversary Book",
          ]
      }
  ],
}
,
{ 
collection:'Times Goods',
menu:[
  {
    title:"BRANDED GOODS",
    items:[
      "Accessories",
      "Drinkware",
      "Maps",
      "Puzzles & Games",
      "Stationery"
      ]
  },
  { 
    title:"BRANDING CLOTHING",
      items:[
        "Men's",
        "Women's",
        "Babies & Kids",
        ]
    },
    { 
      title:"COLLECTIONS",
        items:[
          "Cooking",
          "The 1619 Projects",
          "Early Edition",
          "Local Edition",
          "Modern Love",
          ' "The Daily" '
          ]
      },
      { 
        title:"",
          items:[
            '"The Truth"',
            "Crossword Gifts",
            "Travel Gifts",
            "Women's Rights"
            ]
        },
      
],
},
{
  collection:"Wall Art",
  menu:[
    {
      title:"PHOTOGRAPHY",
      items:[
        "Best Sellers",
        "Historical",
        "New York",
        "Arial",
        "Politics",
        "Space"
        ]
    },
    {
      title:"",
      items:[
        "Sports",
        "Travel"
        ]
    },
    {
      title:"PRINTS",
      items:[
        "Illustrations",
        "Maps",
        "Posters"
        ]
    },
    {
      title:"PERSONALIZED",
      items:[
        "Front Page Reprint",
        "Inside Page Reprint",
        "Crossword Puzzle Reprint",
        "Choose any Times Photo",
        ]
    },
  ]
},
{
  collection:"Books",
  menu:[
    {
      title:"CATEGORIES",
      items:[
        "Crosswords",
        "Travel",
        "Books From the Times"
        ]
    },
    {
      title:"PERSONALIZED",
      items:[
        "Ultimate Birthday Book",
        "Custom Birthday Book",
        "History Books",
        "Sports History Books"
        ]
    },
    {
      title:"PRINTS",
      items:[
        "Illustrations",
        "Maps",
        "Posters"
        ]
    },
    {
      title:"PERSONALIZED",
      items:[
        "Front Page Reprint",
        "Inside Page Reprint",
        "Crossword Puzzle Reprint",
        "Choose any Times Photo",
        ]
    },
  ]
}
];
const data=navMenuData.filter(coll=>coll.collection===collection);
  return <div onMouseLeave={hideMenu} >
    {collection &&data[0] && (
      <div  class="bg-light" >
      <ul  className="parent d-flex justify-content-center  p-4 w-100 menu">
        {data[0].menu.map(list=>(
          <ul  className="child   text-bold list-unstyled p-3">
          <li  className="fw-bold text-info  list-group list-group-flush">{list.title}</li>
            {list.items.map((e,index)=>{
              return <li><Link className="text-dark fw-light">{e}</Link></li>
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
    )}
  </div>
}
