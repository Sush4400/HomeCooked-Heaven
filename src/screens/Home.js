//home.js 

import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer'
import Foodcard from '../components/Foodcard'
import '../App.css'
import Carousal from '../components/Carousal'
import Subcriptionplan from './Subcriptionplan'

export default function Home() {
  return (
    <div>
        <div>
          <Navbar/>
        </div>

        <div div class="container mb-5">
        <Carousal/>
        </div>

        


        <div className='container'>
          <h1 className='text-center my-4'>Our Menu</h1>
            <div className='text-center row row-cols-1 row-cols-md-3 g-4'> 
              <Foodcard  imgUrl="../images/Dhokla.jpg" itemName="Dhokla"/>
              <Foodcard imgUrl="../images/jalebi.jpeg" itemName="Jalebi"/>
              <Foodcard imgUrl="../images/Chhole-Bhature.jpeg" itemName="Chhole Bhature"/>
              <Foodcard imgUrl="../images/Chhena-Poda.jpg" itemName="Cheena Poda"/>
              <Foodcard imgUrl="../images/dosa.jpg" itemName="Dosa"/>
              <Foodcard imgUrl="../images/Pav-Bhaji.jpg" itemName="Pav Bhaji"/>
              <Foodcard imgUrl="../images/Rasmalai.webp" itemName="Rasmalai"/>
              <Foodcard imgUrl="../images/samosa.jpeg" itemName="Samosa"/>
            </div>
          

        </div>
        <div>
          
          <Subcriptionplan/>
        </div>


      <div><Footer/></div>
    </div>
  )
}
