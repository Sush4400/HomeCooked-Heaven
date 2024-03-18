import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
        <Navbar/>
        <div>
            <div style={{display:'flex',justifyContent:'center',background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,19,0.45626172832414214) 0%, rgba(0,212,255,1) 100%)'}}>
                
                    <div class="container mx-5 w-50">
                    <h1 class="display-4 text-center mb-5">Get in Touch!</h1>
                    <p>We're here to assist you with any inquiries or feedback you may have. Please fill out the form below, and we'll get back to you as soon as possible.</p>
                    
                    <form>
                        <div class="mb-3">
                        <label for="helpDropdown" class="form-label">How can we help you?</label>
                        <select class="form-select" id="helpDropdown">
                            <option selected>Choose...</option>
                            <option value="1">General Inquiry</option>
                            <option value="2">Order Issue</option>
                            <option value="3">Technical Support</option>
                            <option value="4">Feedback</option>
                            <option value="5">Other</option>
                        </select>
                        </div>
                        
                        <div class="mb-3">
                        <label for="fullName" class="form-label">Full Name:</label>
                        <input type="text" class="form-control" id="fullName"/>
                        </div>
                        
                        <div class="mb-3">
                        <label for="email" class="form-label">Email Address:</label>
                        <input type="email" class="form-control" id="email"/>
                        </div>
                        
                        <div class="mb-3">
                        <label for="mobileNumber" class="form-label">Mobile Number:</label>
                        <input type="tel" class="form-control" id="mobileNumber"/>
                        </div>
                        
                        <div class="mb-3">
                        <label for="message" class="form-label">Message:</label>
                        <textarea class="form-control" id="message" rows="5"></textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit Feedback</button>
                    </form>
                    </div>
                
                
            </div>
        </div>
        <Footer/>
    </>
  )
}
