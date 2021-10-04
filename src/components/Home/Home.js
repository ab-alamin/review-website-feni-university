import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div class="bg-success text-white card-body">
         <h5 class="card-title">Welcome To Feni University</h5>
            <p class="card-text">Feni University is a private university established in 2012 under the 2010 Private University Act.</p>
                <NavLink className="p-3 btn btn-primary" to="/Services">Services</NavLink>
            </div>
            <img className="img-fluid" src="http://admission.feniuniversity.edu.bd/img/Logo_feni.jpg" alt="" />        
        </div>
    );
};

export default Home;