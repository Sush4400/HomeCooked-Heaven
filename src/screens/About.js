import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
    <Navbar/>
    <div className="container my-5 py-5">
    <h1 className='text-center mb-3'>About us</h1>
        <div className="row border mb-3">
            
            <div className="col-md-7 cont-div">
                <h3>Our Mission</h3>
                <p>Our mission is to deliver high-quality, delicious meals to your doorstep with speed and efficiency.
                    We envision a world where everyone has access to delightful culinary experiences from the comfort of
                    their homes.</p>
            </div>
            <div className="col-md-5 img1-div h-sm-5 w-sm-5" style={{ backgroundImage:`url(${'../images/Dhokla.jpg'})`,repeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "60% 40% 55% 45% / 32% 24% 76% 68% "}}>
                
                {/*  */}
            </div>
        </div>
        <div className="row border mb-3">
            <div className="col-md-5 img2-div" style={{ backgroundImage:`url(${'../images/Chhole-Bhature.jpeg'})`,repeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "60% 40% 55% 45% / 32% 24% 76% 68% "}}>
            </div>
            <div className="col-md-7 cont-div">
                <h3>Our story</h3>
                <p>Established in [Year], our food delivery service has been on a journey to redefine the way people
                    experience the joy of dining at home. From humble beginnings to becoming a trusted name in the
                    industry, we take pride in our commitment to quality and customer satisfaction</p>
            </div>
        </div>
    </div>

    <Footer/>
    </>
  )
}
