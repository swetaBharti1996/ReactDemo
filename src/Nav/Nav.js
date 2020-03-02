import React from 'react';
import './Nav.css';

import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';


const Nav = () =>{

 return(
  <div className="height">
     <div className="row">
     <div className="col-sm-2"></div>
     <div className="col-sm-10">
   <nav className="navstyle">
    <ul>
       <li> <Link to=""> How it works? </Link> </li>
       <li> <Link to="About"> Why FairPe? </Link> </li>
       <li> <Link to="Off">Off-line partners </Link> </li>
       <li> <Link to="Offer">Offer zone</Link> </li>
       <li> <Link to="Contactus">Contact us </Link> </li>
       <p class="text-primary mt-4"> <Link to="Refer">Refer and Earn </Link> </p>
       <button type="button" class="btn btn-secondary mr-3">sign up</button>




    </ul>
   </nav>
   <div class="input-group col-sm-8 mt-0 pt-0 ml-2">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    All
  </button>
  <input class="form-control" type="text" placeholder="Search for any catgories/products" aria-label="Search" />
  <div class="input-group-append">
    <span class="input-group-text" id="basic-text1"><i className="fa fa-search" 
        aria-hidden="true" ></i></span>
        
  </div>
  
</div>
</div>

</div>
<hr />
  </div>
 )

} 
export default Nav;
