import React from 'react'
import HomeDetailCard from './HomeDetailCard'
import About from "../../assets/comunity.jpg"
import Events from "../../assets/events.jpg"
import Volunteer from "../../assets/events.jpg"

function HomeDetail() {

const data =[
    {
        id:1,
        title:"About Us",
        image:About,
        para1:"EcoClean is dedicated...",
        para2:"We organize events...",
        para3:"Our mission is..."
    },
    {
        id:2,
        title:"Events",
        image:Events,
        para1:"Clean surroundings...",
        para2:"Be the change...",
        para3:"A clean city..."
    },
    {
        id:3,
        title:"Volunteer",
        image:Volunteer,
        para1:"Be part of our community...",
        para2:"Sign up today...",
        para3:""
    }
]

  return (
    <div>
      {data.map((el) => (
        <HomeDetailCard key={el.id} data={el}/>
      ))}
    </div>
  )
}

export default HomeDetail
