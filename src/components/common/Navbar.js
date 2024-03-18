import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg border-bottom">
            <div className="container">
                <Link className="navbar-brand" to="./index.html"><img className="brand-logo" src="../assets/images/brand-logo.png"
                        alt=""/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            
                            <i className="user fa-regular fa-user" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false"></i>
                            <ul className="dropdown-menu">
                                <li><button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#sign-in">Sign
                                        In</button></li>
                                <li><button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#sign-up">Sign
                                        Up</button></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart"> <i class="fa-solid fa-cart-shopping"></i></Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-dark" type="submit">Search</button>
                    </form>

                </div>
                
                

            </div>
        </nav>
        <div class="signin modal fade" id="sign-in">
            <div class="form-signin modal-dialog">
                <div class="modal-content">

                    <div class="modal-body">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <form>
                            <h1 class="h2 mb-3">Please sign in</h1>
                            <div class="form-floating">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
                            </div>

                            <div class="form-check text-start my-3">
                                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Remember me
                                </label>
                            </div>
                            <button class="btn btn-light w-100 py-2" type="submit">Sign in</button>
                            <p class="text-center">new User? <button type="button"
                                    class="btn btn-outline-secondary border-0" data-bs-toggle="modal"
                                    data-bs-target="#sign-up">Sign Up</button></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="signin modal fade" id="sign-up">
            <div class="form-signin modal-dialog">
                <div class="modal-content">

                    <div class="modal-body">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <form>
                            <h1 class="h2 mb-3">Please sign up</h1>
                            <div class="form-floating">
                                <input type="text" class="form-control" id="floatingName" placeholder="John Doe"/>
                                <label for="floatingName">Enter your Name</label>
                            </div>
                            <div class="form-floating">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="RePassword" placeholder="Password"/>
                                <label for="RePassword">Re-enter Password</label>
                            </div>
                            <button class="btn btn-light w-100 py-2" type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>

    </>
  )
}
