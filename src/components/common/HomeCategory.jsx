import React from 'react'

export default function HomeCategory({title,col}) {
    return (
        <div className='p-5 m-5' style={{background:`url(${process.env.REACT_APP_URL}/images/jack.jpg) ` ,width:"50%",height:"40vh"}}>
            <a href="/collections/branded-clothing" class="home-collection collection-1">
        <div class="home-collection-text-block"> 
          <div class="home-collection-text-large chelt">
            Branded Clothing
          </div>
          <div class="home-collection-text-small">
            Shop Now
          </div>
        </div>
      </a>
        </div>
    )
}
