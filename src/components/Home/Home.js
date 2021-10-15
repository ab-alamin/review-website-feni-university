import React from 'react';
import { NavLink } from 'react-router-dom';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
              
              <div class="bg-success text-white card-body">
         <h5 class="card-title">Welcome To Feni University</h5>
            <p class="card-text">Feni University is a private university established in 2012 under the 2010 Private University Act.</p>
            {/* service area */}
                <h2 className="bg-primary">Our Services</h2>
                <NavLink className="p-3 btn btn-primary" to="/Services">Services</NavLink>
                <Services></Services>

                <h2 className="bg-info d-inline">Our Department</h2>
                 
            {/* card item */}
            <div class="row row-cols-1 row-cols-md-3 g-4  text-black">
  <div class="col">
    <div class="card">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
        <h5 class="card-title">BBA</h5>
        <p class="card-text">Major in Management , Major in Accounting ,Major in Finance,Major in Marketing,Major in HRM, and you have to chose one.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
        <h5 class="card-title">MBA</h5>
        <p class="card-text">The applicant must have the CGPA of 2.5 or above (in the scale of 4.0), or at least second class in the bachelor’s degree..</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
        <h5 class="card-title">RMBA</h5>
        <p class="card-text">Regular Master of Business Administration contains major in-

-Accounting               

-Finance & Banking

-Management

-Marketing

-Human Resource  Management.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
        <h5 class="card-title">ENGLISH</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
        <h5 class="card-title">LAW</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
        <h5 class="card-title">CSC</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
        <h5 class="card-title">CIVIL</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
        <h5 class="card-title">MATHMATICS</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body">
        <h5 class="card-title">EEE</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
{/* card item end */} 
            </div>
            
              
               
        </div>
        
    );
};

export default Home;