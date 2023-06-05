import * as React from 'react';
import Navbar from './Navbar'
import "./home.css"

const Home = () => {
  return (
    <div>
    <nav className="dropdownmenu">
        <ul>        
       
       
         <img src="/images/logo.png" id="img1"></img>
         <img src="/images/bloodcare1.png" id="img2"></img>

         
       

        <li ><a href="/Login" id="rad">LogIn</a>
      
      </li>

        <li ><a href="/SignUp" id="rad">SignUp</a>
       
       </li>
  
  
       </ul>
</nav>
  <h1 >Donate Blood And Inspire Others!</h1>
  
           <div class="card-container">
            <div class="card">
              <img src="images/donor.jpg" alt="Image 1"></img>
              <img src="images/donorlogo.png" alt="Logo 1" id="logo"></img>
              <h3>Become a Donor</h3>
              <p>Becoming a blood donor is a selfless act that can save lives.</p>
              
            </div>
            <div class="card">
              <img src="images/giveblood.jpg" alt="Image 2"></img>
              <img src="images/givebloodlogo.png" alt="Logo 2" id="logo"></img>
              <h3>Why give Blood?</h3>
              <p>Giving blood is act of kindness that can save lives.</p>
              
            </div>
            <div class="card">
              <img src="images/donation helps.jpg" alt="Image 3"></img>
              <img src="images/donationhelplogo.png" alt="Logo 3" id="logo"></img>
              <h3>How Donation Helps</h3>
              <p>Donating blood helps save lives by providing blood for emergencies</p>
              
            </div>
          </div>

    </div>
  )
}

export default Home
