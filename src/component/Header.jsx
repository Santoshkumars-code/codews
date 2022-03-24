import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import './Header.css'

const Header = () =>{
  return ( 
    <>

        <div className="navbar navbar-expand-lg navbar-dark bg-info position-sticky">
        <div className="container">
            <a href="#" className="navbar-brand">Code with Sadiq</a>

            {/* <ul className='list-group'>
                <li className='list-group list-group-item list-group-item-action bg-info border-0 text-white'> home</li>
                <li className='list-group list-group-item list-group-item-action bg-info border-0 text-white'> home</li>
            </ul> */}
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
     <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-2 mb-2 mb-lg-0 ">
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="/"><i class="bi bi-house-door-fill"></i>Home</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="/courses"><i class="bi bi-book-fill"></i>Courses</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="#">Online Payment</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link active bg-warning text-dark" aria-current="page" href="/addmission">Apply for addmission</a>
        </li>
        </ul>
        </div>
            </div>
            </div>
           
           
            </>
  )
}

export default Header;