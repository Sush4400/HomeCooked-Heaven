import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5  border-top">
            <div className="col my-3">
                <h className='my-5 py-5 text-dark' style={{WebkitTextFillColor: 'white',WebkitTextStrokeWidth: "1px",WebkitTextStrokeColor: 'black'}}>Homecooked Heaven</h>
                <p className="text-body-secondary">© 2024</p>
            </div>

            <div className="col mb-3">

            </div>

            <div className="col mb-3">
                <h5>Company</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">Home</Link></li>
                    <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Features</Link></li>
                    <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Team</Link></li>
                    <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
                    <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-body-secondary">About</Link></li>
                </ul>
            </div>

            <div className="col mb-3">
                <h5>Contact Us</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 text-body-secondary">Help & Support</Link></li>
                </ul>
            </div>

            <div className="col mb-3">
                <h5>Legal</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><Link to="/terms" className="nav-link p-0 text-body-secondary">Terms & Condition</Link></li>
                    <li className="nav-item mb-2"><Link to="/cookie" className="nav-link p-0 text-body-secondary">Cookie Policy</Link></li>
                    <li className="nav-item mb-2"><Link to="/privacy" className="nav-link p-0 text-body-secondary">Privacy Policy</Link></li>
                </ul>
            </div>
        </footer>
    </div>
  )
}
